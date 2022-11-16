const express=require("express");
const app=express();
const cors = require("cors");
//处理跨域
app.use(cors({
    // origin: ['http://localhost:8080', 'http://localhost:8000'],
    origin: ['http://192.168.124.3:8080', 'http://192.168.124.3:8000'],//跨域地址
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }))
const apiRouter=require('./routes/api');
app.use("/api",apiRouter);
app.listen(8082,()=>{
    console.log('运行成功,8082端口监听中');
});
