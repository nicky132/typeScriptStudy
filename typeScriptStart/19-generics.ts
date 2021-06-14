//泛型  不指定类型，使用的时候再指定类型
export {}
// function createNumberArray(length:number,value:number):number[]{
//     const arr = Array<number>(length).fill(value)
//     return arr
// }
// function createStringArray(length:number,value:string):string[]{
//     const arr = Array<string>(length).fill(value)
//     return arr
// }//这样代码有冗余
// const res = createNumberArray(3,10)


//解决冗余可以这样写
function createNumberArray<T>(length:number,value:T):T[]{
    const arr = Array<T>(length).fill(value)
    return arr
}
const res = createNumberArray<string>(3,'foooo')