/**
 *
 *字面量类型 
 * @flow
 */

 const a:'foo' = 'foo'
 const type:'success' | 'marning' | 'danger' = 'success'
 const b:string | number = 'string' //100

 //类型别名,别的地方都可以用这个类型
 type StringOrNumber = string | number
 const c:StringOrNumber = 'string' //100

 //maybe类型
 const gender:?number = undefined //除了接受number类型以外，还可以接收undefined或null。maybe类型
 const gender:number | null | void = undefined