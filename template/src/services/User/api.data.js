"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_GETUSERDETAILS_INPUT = exports.USER_LOGIN_INPUT = exports.USER_SIGNUP_INPUT = void 0;
class USER_SIGNUP_INPUT {
    constructor(userName, emailId, password, firstName, lastName, mobile) {
        this.userName = userName;
        this.emailId = emailId;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
    }
    static fromJSON(jsonObj) {
        return new USER_SIGNUP_INPUT(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.userName, jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.emailId, jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.password, jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.firstName, jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.lastName, jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.mobile);
    }
    checkDefaultPreCondition() {
        const error = {};
        if (!this.userName) {
            error['userName'] = "userName is required";
        }
        if (!this.emailId) {
            error['emailId'] = "emailId is required";
        }
        return {
            isValid: Object.keys(error).length == 0,
            errorBody: error
        };
    }
}
exports.USER_SIGNUP_INPUT = USER_SIGNUP_INPUT;
class USER_LOGIN_INPUT {
    constructor(emailId, password) {
        this.emailId = emailId;
        this.password = password;
    }
    static fromJSON(jsonObj) {
        return new USER_LOGIN_INPUT(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.emailId, jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.password);
    }
    checkDefaultPreCondition() {
        const error = {};
        if (!this.emailId) {
            error['emailId'] = "emailId is required";
        }
        if (!this.password) {
            error['password'] = "password is required";
        }
        return {
            isValid: Object.keys(error).length == 0,
            errorBody: error
        };
    }
}
exports.USER_LOGIN_INPUT = USER_LOGIN_INPUT;
class USER_GETUSERDETAILS_INPUT {
    constructor(emailId) {
        this.emailId = emailId;
    }
    static fromJSON(jsonObj) {
        return new USER_GETUSERDETAILS_INPUT(jsonObj === null || jsonObj === void 0 ? void 0 : jsonObj.emailId);
    }
    checkDefaultPreCondition() {
        const error = {};
        if (!this.emailId) {
            error['emailId'] = "emailId is required";
        }
        return {
            isValid: Object.keys(error).length == 0,
            errorBody: error
        };
    }
}
exports.USER_GETUSERDETAILS_INPUT = USER_GETUSERDETAILS_INPUT;
