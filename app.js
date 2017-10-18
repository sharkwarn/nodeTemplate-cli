import Express from 'express';

global.app = Express();
//静态文件资源

app.use(Express.static('public'));

//定义请求的公共设置。
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

app.all('*',(req,res)=>{
  res.send(`404 页面没有找到！！！`)
})



app.listen(5001,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(`开启服务成功！！！`)
});
