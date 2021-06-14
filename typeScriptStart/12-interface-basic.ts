//jiekou leixing ,yonglai y

//接口用来约束有哪些成员，而且成员的类型是什么样

export {}

interface Post{
   title:string
   content:string
}
function printPost(post:Post){
    console.log(post.title)
    console.log(post.content)
}
printPost({
    title:'hello',
    content:'yesss'
})