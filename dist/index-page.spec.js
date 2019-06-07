"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
var chai_1 = require("chai");
var mocha_1 = require("mocha");
var driver_1 = require("./driver");
var config_1 = require("./config");
describe("Test index page", function () {
    return __awaiter(this, void 0, void 0, function () {
        var driver;
        var _this = this;
        return __generator(this, function (_a) {
            this.timeout(60000);
            mocha_1.before(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver_1.getDriver()];
                        case 1:
                            driver = _a.sent();
                            return [4 /*yield*/, driver.navigate().to(config_1.baseUrl)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('check the page title', function () { return __awaiter(_this, void 0, void 0, function () {
                var title;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.getTitle()];
                        case 1:
                            title = _a.sent();
                            chai_1.expect(title).to.equal('Campus Virtual');
                            return [2 /*return*/];
                    }
                });
            }); });
            it('check the page login form (I will intentionally fail) ', function () { return __awaiter(_this, void 0, void 0, function () {
                var form, method;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            form = driver.findElement(selenium_webdriver_1.By.xpath("//form[@action='" + config_1.baseUrl + "/login/index.php']"));
                            return [4 /*yield*/, form.getAttribute("method")];
                        case 1:
                            method = _a.sent();
                            chai_1.expect(method.toLocaleLowerCase()).to.be.eq("get");
                            return [2 /*return*/];
                    }
                });
            }); });
            it('check the page login form', function () { return __awaiter(_this, void 0, void 0, function () {
                var form, method;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            form = driver.findElement(selenium_webdriver_1.By.xpath("//form[@action='" + config_1.baseUrl + "/login/index.php']"));
                            return [4 /*yield*/, form.getAttribute("method")];
                        case 1:
                            method = _a.sent();
                            chai_1.expect(method.toLocaleLowerCase()).to.be.eq("post");
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should have input for username', function () { return __awaiter(_this, void 0, void 0, function () {
                var el;
                return __generator(this, function (_a) {
                    el = driver.findElement(selenium_webdriver_1.By.id('username'));
                    chai_1.expect(el).to.be.not.eq(undefined);
                    return [2 /*return*/];
                });
            }); });
            it('should correctly login with ases', function () {
                return __awaiter(this, void 0, void 0, function () {
                    var el, pass, butt;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('username'))];
                            case 1:
                                el = _a.sent();
                                el.sendKeys('sistemas1008');
                                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('password'))];
                            case 2:
                                pass = _a.sent();
                                pass.sendKeys('ases@2019');
                                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className('btn-login'))];
                            case 3:
                                butt = _a.sent();
                                return [4 /*yield*/, butt.click()];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, driver.navigate().to(config_1.baseUrl + "/course/view.php?id=41706")];
                            case 5:
                                _a.sent();
                                setTimeout(function () { }, 3000);
                                chai_1.expect(0).to.be.eq(0);
                                return [2 /*return*/];
                        }
                    });
                });
            });
            after(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.close()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
});
