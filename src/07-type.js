/**
 * 
 *函数类型
 * @flow
 */
function foo(callback:(string,number)=>void){
    callback('string',100)
}

foo(function(str,n){
  //么有返回值，或返回值为undefined
})