"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("../../models/User/User.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    Signup(input, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.findUserByEmail(input.emailId);
                if (user) {
                    res.status(400).send("User allready registered");
                }
                else {
                    const encryptedPassword = yield bcrypt_1.default.hash(input.password.toString(), 10);
                    const newUser = new User_model_1.default({
                        userName: input.userName,
                        emailId: input.emailId,
                        firstName: input.firstName,
                        lastName: input.lastName,
                        mobile: input.mobile,
                        password: encryptedPassword
                    });
                    yield newUser.save();
                    res.send({ userName: newUser.userName });
                }
            }
            catch (e) {
                res.status(500).send("Error" + e);
            }
        });
    }
    Login(input, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretKey = process.env.JWT_SECRET_KEY || "vadhyan-admin";
            try {
                const user = yield User_model_1.default.findOne({ emailId: input.emailId });
                if (!user) {
                    return res.status(400).json({ message: 'User not found' });
                }
                const isPasswordValid = yield bcrypt_1.default.compare(input.password.toString(), user.password.toString());
                if (!isPasswordValid) {
                    return res.status(401).json({ message: 'Invalid password' });
                }
                if (secretKey) {
                    const token = yield jsonwebtoken_1.default.sign({ id: user._id }, secretKey);
                    res.header('auth-token', token).json({ token });
                }
            }
            catch (e) {
                res.status(500).send("Error" + e);
            }
        });
    }
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_model_1.default.findOne({
                emailId: email
            }).exec();
        });
    }
}
exports.default = UserService;
