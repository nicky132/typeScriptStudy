let a:number
//定义number类型
let arr = [1]
let arrr:(string | number)[]
arrr.push('2');
// 定义数组类型

//联合类型 | 
//枚举
enum HTTPCode{
    NotFound = 404
}
console.log(HTTPCode.NotFound)
//元祖类型
let t = [1,2]
//any 类型,相当于你在写js,没有ts能力
let any:any = 1

/***
 * interface接口 type
 */

 interface Props{
    index:number
    number?:number//可有可没有
 }
// //接口实例化
//  let obj:Props = {
//     index:1
//  }

 //定义类型
 type StringOrNumber = string | number
 let s1:StringOrNumber;
 s1 = '3'

//  interface还可以接口合并
interface Props{
    str:string
}
//给p设置props类型
let p:Props = {
    index:1,
    number:2,
    str:'2'
}

//接口 type
interface Parent{
    name:string
}

//接口 type
interface Children{
    age:number
}

//interface还可以继承,这继承意思就是Props继承了Parent了name属性
interface Props extends Parent{
   index:number,
   number?:number//可选类型
}

//interface还可以继承,这继承意思就是Props继承了Parent了name属性,
//又继承了Children的age属性
interface Props extends Parent,Children{
    index:number,
    number?:number//可选类型
}


//泛型
// function foo(num:number):number{

// }
// 这时候,num我又想有可能num是number也有可能是string
// function foo(num:number | string):number{

// }

//这时候也可以另外一种写法
function foo<T>(num:T):T{
    return num
}
//1,直接写number
// foo<number>(1)
//2,不写也是可以推导出来的
// foo(1)


//类型和接口interface的区别,可以作出高阶类型
type P1<T> = T extends string?string:T
type P2 = P1<string>//P2是string类型
type P3 = P1<boolean>//P3是boolean类型

//Pick Omit
// pick就是把类型给拿出来
// Omit就是把类型给干掉
type index = Pick<Props,'index'>
type name = Omit<Props,'name'>

//as is 类型断言
let aaa:StringOrNumber = '1'//这个时候由于之前定义过StringOrNumber有可能是string类型也有可能是number类型,但是我就是想a是number类型
aaa as string

//接口 type
//实现类
class Ani implements Parent{
  name:'22';
  private age
}

let a1111 = new Ani()
// a1111.age //因为age是私有的,所以这个直接访问会报错
a1111.name
