//抽象类,用来约束子类成员，还有实现，接口没有实现
export {}
abstract class Animal{ //抽象类只能被继承，不能new
    eat(food:string):void{
        console.log(`${food}`)
    }
    abstract run (distance:number):void
}
class Dog extends Animal{
    run(distance: number): void {
        console.log("距离：",distance)
        throw new Error("Method not implemented.")
    }
    
}
const d = new Dog()
d.eat('吃饭')
d.run(100)