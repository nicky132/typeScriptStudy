"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Draft"] = 0] = "Draft";
    PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
    PostStatus[PostStatus["Published"] = 2] = "Published";
})(PostStatus || (PostStatus = {})); //枚举如果第一个不指定值，默认剩下几个会自增
var post = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript',
    status: PostStatus.Draft //3 //1 //0
};
//# sourceMappingURL=07-enum-type.js.map