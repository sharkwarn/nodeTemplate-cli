# 基于node 开发的博客网站


# About

  最近考虑组一个Node.js项目，前几天突发奇想打算做一个博客的项目。后端完全是node.js。 前端是dva的react项目。主要是平常自己使用的便是dva，况且在github上还没有一个完整的react项目。

  因为是自己的第一个node.js项目，所以不正确或者不严格的地方，希望大家指出，你我共勉。  O(∩_∩)O

## 目录结构

```
.
|——article                          储存md文档
|——controller
|  |——article                       操作博文相关接口
|  |   |——findArticle.js            查找博文接口           
|  |   |——saveArticle.js            创建博文接口
|  |   |——searchAllArticle.js	      搜索博文列表
|  |   |——updateArticle.js          修改博文接口
|  |
|  |——banner                        轮播图接口
|  |   |——getBanner                 获取轮播详细信息接口
|  |   |——saveBanner                修改轮播图接口
|
|——upload                           图片中心
|  |——getUploadFile.js              所有图片列表
|  |——fileUpload.js                 上传文件接口
|
|——user
|  |——login.js                      管理员登陆接口
|  |——register.js                   管理员注册账号接口
|
|——mongoose
|  |——schema                        定义——schema
|  |——article.js                    博文model
|  |——user.js                       用户信息model
|  |——index.js                      链接数据库
|
|——public                           静态资源文件
|
|——routes                           路由
|  |——article.js                    博文路由
|  |——index.js                      路由配置文件
|  |——upload.js                     上传文件路由
|  |——user.js                       用户路由
|
|——uploadfile                       上传文件资源
|——app.js                            
|——index.js
|——config.js                        全局配置

.
```


## 接口说明文档

  [1、创建博文接口](#1)<br/>







  ###   1、创建博文接口

  + 请求url
  
  ```
  
  ```


# 遇到的坑

##### mongoose 根据 _id 查询结果

_id 并不是普通的字符串，而是特殊的标记。因此需要转换成ObjectId。

```
mongoose.Types.ObjectId(id);
```

示例：

```
const arr = [];
getIds.map((item) => {
  arr.push(`(${mongoose.Types.ObjectId(item)})?`);
})    
const reg = new RegExp(arr.join(''));
articleModel.find({ '_id': getIds },function(err, data){
  // console.log(data);
  if (err) {
    console.log(err);
    res.send({
      code: 200,
      success: false,
      msgCode: '没有查询到结果或者数据不存在',
      data: {}
    });
    return;
  }
  res.send({
    code: 200,
    success: true,
    data: data
  })
})
```