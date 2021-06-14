//数组类型
const arr1:Array<number> = [1,2,3]
const arr2:number[] = [1,2,3]
/////
// function sum(...args){
//     //  这样ts的写法就会报错
//     return args.reduce((prev,current)=>prev+current,0)
// }
function sum(...args:number[]){
    //  这样ts的写法就会报错, 这里只需要添加一个数字类型的注解就行
    return args.reduce((prev,current)=>prev+current,0)
}