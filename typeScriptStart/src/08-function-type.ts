//函数类型
export {}
function fun1(a:number,b:number = 10,...rest:number[]):string{
    return 'func1'
}
fun1(100,200)
fun1(100)
//以上函数的类型限制

//函数表达式的类型限制
const fun2:(a:number,b:number) => string = function(a:number,b:number):string{
    return 'fun2'
}