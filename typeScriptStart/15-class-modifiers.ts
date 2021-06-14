//类的访问修饰符 public private
export {}

class Person{
    public name:string //全局访问
    private age:number //private 只能类内部访问
    protected gender:boolean
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
// console.log(tom.age)//这里会报错，因为age只能类内部访问
// console.log(tom.gender) //这里也会报错，只能内部访问

// class Student extends Person{
//     constructor(name:string,age:number){
//        super(name,age)//调用一下父类的构造函数
//        console.log(this.gender)//这里就能访问到，那么protected指的是只能在子类中访问protected的属性
//     }
// }



// class Student extends Person{
//     private constructor(name:string,age:number){ //这里private是构造函数的访问修饰符，就不允许示例话，这样只能在类的内部添加静态方法
//        super(name,age)//调用一下父类的构造函数
//        console.log(this.gender)//这里就能访问到，那么protected指的是只能在子类中访问protected的属性
//     }
// }
// const jack  = new Student()



class Student extends Person{
    private constructor(name:string,age:number){ //这里private是构造函数的访问修饰符，就不允许示例话，这样只能在类的内部添加静态方法
       super(name,age)//调用一下父类的构造函数
       console.log(this.gender)//这里就能访问到，那么protected指的是只能在子类中访问protected的属性
    }
    static create(name:string,age:number){
        return new Student(name,age)
    }
}
const jack  = Student.create("tom",18)//这样就能访问private的方法了