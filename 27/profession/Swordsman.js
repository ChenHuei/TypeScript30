"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("../characters/Role"));
var characters_1 = __importDefault(require("../characters/characters"));
var Sword_1 = __importDefault(require("../weapons/basic/Sword"));
var Swordsman = /** @class */ (function (_super) {
    __extends(Swordsman, _super);
    function Swordsman(name) {
        return _super.call(this, name, Role_1.default.Swordsman, new Sword_1.default()) || this;
    }
    return Swordsman;
}(characters_1.default));
exports.default = Swordsman;
