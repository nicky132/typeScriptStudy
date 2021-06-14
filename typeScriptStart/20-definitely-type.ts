//类型声明,第三方模块用ts，需要类型声明，要么install @types/lodash方式安装，要么自定义declare function 声明类型
import {camelCase} from 'lodash'
import qs from "query-string"
qs.parse('?value=2&name=s')
// declare function camelCase (input:string):string
const res = camelCase('hello typed')