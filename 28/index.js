"use strict";
// 抽象類別
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
abstract class 抽象類別

interface 的特點：一但跟介面進行綁定，就必須實踐介面全部定義的規格
class 的特點：定義物件的完整藍圖與實踐過程

如果想同時兼顧兩者優勢，繼承父類別的同時，也能夠彈性地宣告規格，而非直接實踐出過程，則可選擇抽象類別

宣告方式

abstract class AC {
    abstract AProp: TAProp
    abstract AMethod(...): TAMethod

    [public | private | protected] Prop: TProp
    [public | private | protected] Method(...): TMethod
}

一但繼承 AC 的子類別：
1. 繼承了成員變數 (Prop) 和成員方法 (Method)
2. 必須實踐成員變數 (AProp) 和成員方法 (AMethod)

抽象類別的限制

1. 抽象類別不能進行建立物件 (由於裡面的抽香成員還未實踐)
2. 抽象類別生來就是被繼承的
3. 抽象成員必須被實踐為 public

*/
var Swordsman_1 = __importDefault(require("./profession/Swordsman"));
var Warlock_1 = __importDefault(require("./profession/Warlock"));
var Sword_1 = __importDefault(require("./weapons/basic/Sword"));
var Dagger_1 = __importDefault(require("./weapons/basic/Dagger"));
var Wand_1 = __importDefault(require("./weapons/basic/Wand"));
var StabAttack_1 = __importDefault(require("./abilities/StabAttack"));
var swordUsingStab = new Sword_1.default();
swordUsingStab.switchAttackStrategy(new StabAttack_1.default());
var leo = new Swordsman_1.default('Leo');
var woody = new Warlock_1.default('Woody');
try {
    leo.introduce();
    leo.attack(woody);
    woody.introduce();
    woody.attack(leo);
    leo.equip(new Dagger_1.default());
    leo.attack(woody);
    leo.equip(swordUsingStab);
    leo.attack(woody);
    leo.equip(new Wand_1.default());
    leo.attack(woody);
}
catch (error) {
    console.log(error);
}
