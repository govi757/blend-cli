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
const common_routes_config_1 = require("./common/common.routes.config");
const User_service_1 = __importDefault(require("../services/User/User.service"));
const api_data_1 = require("../services/User/api.data");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
        this.UserService = new User_service_1.default();
    }
    configureRoutes() {
        this.app.route('/user/signup').post((req, res) => __awaiter(this, void 0, void 0, function* () {
            const input = api_data_1.USER_SIGNUP_INPUT.fromJSON(req.body);
            const defaultPreCondition = input.checkDefaultPreCondition();
            if (defaultPreCondition.isValid) {
                this.UserService.Signup(input, res);
            }
            else {
                res.status(412).send(defaultPreCondition.errorBody);
            }
        }));
        this.app.route('/user/login').post((req, res) => __awaiter(this, void 0, void 0, function* () {
            const input = api_data_1.USER_LOGIN_INPUT.fromJSON(req.body);
            const defaultPreCondition = input.checkDefaultPreCondition();
            if (defaultPreCondition.isValid) {
                this.UserService.Login(input, res);
            }
            else {
                res.status(412).send(defaultPreCondition.errorBody);
            }
        }));
        return this.app;
    }
}
exports.default = UserRoutes;
