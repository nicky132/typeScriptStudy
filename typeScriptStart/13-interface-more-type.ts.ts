//jiekou leixing ,yonglai y

//接口用来约束有哪些成员，而且成员的类型是什么样

export {}

interface Post{
   title:string
   content:string
   subtitle?:string//加个问号，证明这个subtitle是可有可无的，实际上就是值这个属性要么是STRING要么是UNDEFINED
   readonly summary:string
}
function printPost(post:Post){
    console.log(post.title)
    console.log(post.content)
}
// printPost({
//     title:'hello',
//     content:'yesss'
// })

const hello:Post = {
    title:'hello',
    content:'yesss',
    summary:'eee'
}
// hello.summary = "optt" //会报错
//扩展添加任意属性的接口，且约定这些属性必须为string类型
interface Cache{
    [prop:string]:string
}
const cache:Cache = {}
cache.foo = 'value1'
cache.bar = 'value2'
