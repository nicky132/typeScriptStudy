//typescript学习
yarn init
yarn add flow-bin --dev

node type.js

//检查报错
yarn flow

yarn flow init

yarn flow
//停止检查报错
yarn flow stop

//使用完flow注解后要移除:number这样的类型注解，不然编译报错，就在跑代码之前使用flow命令移除就行
yarn add flow-remove-types --dev

yarn flow-remove-types . -d dist
//一般这样用  src源代码里的文件都去掉注释放到dist文件夹里
yarn flow-remove-types src -d dist


//另外一张办法去除注解，babel
yarn add @babel/core @babel/cli @babel/preset-flow  --dev

.babelrc //添加babel的配置文件

//用babel去除注解
yarn babel src -d dist
//这样就去除里代码中所有的注解


//vscode安装flow language suporrt插件，编码后保存时机会提示语法的报错，不用在node终端里去看，才能发现错误
