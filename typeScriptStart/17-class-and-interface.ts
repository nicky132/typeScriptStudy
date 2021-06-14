//类与接口
export {}
// class Person{
//     eat(food:string):void{
//         console.log(`${food}`)
//     }
//     run(distance:number){
//        console.log(`${distance}`)
//     }
// }

// class Animal{
//     eat(food:string):void{
//         console.log(`${food}`)
//     }
//     run(distance:number){
//        console.log(`${distance}`)
//     }
// }
// Person 和 Animal有共同的特征，可以定义为抽象类


// interface EatAndRun{
//     eat(food:string):void
//     run(distance:number):void
// }
// class Person implements EatAndRun{
//     eat(food:string):void{
//         console.log(`${food}`)
//     }
//     run(distance:number){
//        console.log(`${distance}`)
//     }
// }

// class Animal implements EatAndRun{
//     eat(food:string):void{
//         console.log(`${food}`)
//     }
//     run(distance:number){
//        console.log(`${distance}`)
//     }
// }

//多抽象类
interface Eat{
    eat(food:string):void
}
interface Run{
    run(distance:number):void
}
class Person implements Eat,Run{
    eat(food:string):void{
        console.log(`${food}`)
    }
    run(distance:number){
       console.log(`${distance}`)
    }
}

class Animal implements Eat,Run{
    eat(food:string):void{
        console.log(`${food}`)
    }
    run(distance:number){
       console.log(`${distance}`)
    }
}