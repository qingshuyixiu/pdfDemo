module.exports=async(request,response,next)=>{
    const fs = require('fs');
//调用readFile方法读取磁盘文件：异步操作
await fs.readFile('../node/pdf/测试.pdf', function (err, data) {
    //当文件读取失败时，可以获取到err的值，输出错误信息
    if (err) throw err
    //当文件读取成功时，可以获取到data的值，输出响应的内容
    // console.log(data.toString())
    
    response.send(data);
})
}