//任意类型（弱类型）
export {}
function stringify (value:any){
    return JSON.stringify(value)
}
stringify('string')
stringify(111)
stringify(true)
let foo:any = 'string'
foo = 100
foo.bar()
// any类型不安全