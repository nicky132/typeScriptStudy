/**
 * 运行环境 -api，找运行环境的一些类型限制
 *@flow 
 */


 //不同环境对应的api
// https://github.com/facebook/flow/blob/master/lib/core.js //javascript标准库中的api。array，object等
// https://github.com/facebook/flow/blob/master/lib/dom.js
// https://github.com/facebook/flow/blob/master/lib/bom.js
// https://github.com/facebook/flow/blob/master/lib/cssom.js
// https://github.com/facebook/flow/blob/master/lib/node.js


 const element:HTMLElement | null = document.getElementById('app')