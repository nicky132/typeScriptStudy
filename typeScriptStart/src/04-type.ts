//object类型
export {}//确保跟其他示例没有成员冲突
const foo:object = function (){} //[] //{} object类型不单单指的是对象类型，而是除了数值类型以外的所有类型都可以
// const obj:{foo:number,bar:number} = {foo:123,bar:'string'}//object类型定义，可以用这种字面量的语法方式，但是还可以用更好的方法，那就是接口方式