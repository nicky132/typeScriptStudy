//枚举类型
export {}  //确保当前作用域跟其他文件没有冲突
// const PostStatus = {
//     Draft:0,
//     Unpublished:1,
//     Published:2
// }

// enum PostStatus {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2
// }


// enum PostStatus {
//     Draft = 6,
//     Unpublished,
//     Published
// }//枚举第一个为numner类型，后面几个不定义时就会默认自增


// enum PostStatus {
//     Draft = "qq",
//     Unpublished = "aa",
//     Published = "bb"
// }//枚举如果是字符串类型，那么每个都要这么定义

// enum PostStatus {
//     Draft,
//     Unpublished,
//     Published
// }//枚举如果第一个不指定值，默认剩下几个会自增


const enum PostStatus {
    Draft,
    Unpublished,
    Published
}//枚举常量

const post = {
    title:'Hello TypeScript',
    content:'TypeScript is a typed superset of JavaScript',
    status:PostStatus.Draft //3 //1 //0
}

