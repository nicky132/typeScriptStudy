/**
 * 对象类型
 *@flow 
 */

 const obj1:{foo:string,bar:number} = {foo:'string',bar:100}
 //问好表示可选可不选
 const obj2:{foo?:string,bar:number} = {foo:'string',bar:100}


 //表示任意个数的键，不过键值的类型都必须是字符串
 const obj3:{[string]:string} = {}
 obj3.key1 = "value1"
 obj3.key2 = "value2"

