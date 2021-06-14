//类的只读属性
export {}

class Person{
    public name:string //全局访问
    private age:number //private 只能类内部访问
    protected readonly gender:boolean
    constructor(name:string,age:number){
        this.name = name
        this.age = age
        this.gender = true
    }
    sayHi(msg:string):void{
        console.log(`${this.name},${msg}`)
    }
}
const tom = new Person('tom',18)
console.log(tom.name)
// tom.gender = false //readonly只读属性后，不能再次修改了