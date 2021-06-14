/**
 *
 *mixed any 
 * @flow
 */

 //可以传入任意类型参数 string number boolean 。。。
function passMixed (value:mixed){
   if(typeof value == 'string'){
     value.substr(1)
   }
   if(typeof value == 'number'){
      value = value
   }
}
passMixed('string')
passMixed(100)

//任意类型参数都可以传入，但是不会报错，属于若类型，而passMixed是强类型
function passAny (value:any){
    value.substr(1)
    value = value
    
}
passAny('STRING')
passAny(1999)