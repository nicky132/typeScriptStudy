"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *ts作用域问题
 */
// const a = 122   //这样会报错，全局作用域中前面已经有定义过一个a了，所以报错
//解决这样的问题有两种方法
//1自执行函数
(function () {
    var a = 2;
})();
//2 模块化方式产生自己的作用域
var a = 123;
//# sourceMappingURL=03-type.js.map