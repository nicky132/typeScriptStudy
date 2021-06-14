//类型推断
export {}
const nums = [100,120,119,112]
const res = nums.find(i=>i>0)
// const square = res*res
//这样用 断言是number，断言只是编译阶段的，编译阶段之后就不生效里
const num1 = res as number
const num2 = <number>res //这玩意在react jsx中不能用，容易混淆