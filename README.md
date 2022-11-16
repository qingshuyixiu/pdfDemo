##1. 克隆项目
##2. 进入node目录输入以下命令启动node服务器
    cd node
    npm i
    node ./app.js
##3. 用编辑器打开 app.js
    ```
    app.use(cors({
        // origin: ['http://localhost:8080', 'http://localhost:8000'],
        origin: ['http://192.168.124.3:8080', 'http://192.168.124.3:8000'],//跨域地址
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }))
    ```
    修改192.168.124.3为自己本机ip
##4. 进入demo目录输入以下命令
    cd demo
    npm i
    npm run serve
    用本地IP访问,不要用localhost访问
