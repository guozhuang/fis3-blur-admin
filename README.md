
#fis3-blur-admin


##构建
```bash

# 安装fis bower 
npm install  -g fis3
npm install  -g bower



# 下载demo
git clone git@github.com:liguwe/fis3-blur-admin.git
cd fis3-blur-admin

# 安装插件,依赖
npm install 
bower install

# 使用FIS编译DEMO
fis3 release 

# 预览效果
fis3 server  start --type node

# QA测试
fis3 release qa

# 生产环境
fis3 release prod

```

##目录结构
```
├── fis-conf.js              <- fis3 配置文件
├── bower.json               <- front-end library dependencies
├── package.json             <- mostly task runner dependencies
├── map.json                 <- 记录静态资源映射表，解决资源模块依赖，按需加载问题
├── docs/                    <- 前端数据接口,markdown形式
├── mock/                    <- 前端模拟数据（需要进入插件解决跨域问题）
├── src/                     <- main front-end assets 前端项目
│   ├── 404.html
│   ├── auth.html
│   ├── index.html          <- main app dashboard page
│   ├── reg.html
│   ├── app/                <- angular application files
│   │   ├── app.js         <- angular application entry point. Used for managing dependencies
│   │   ├── pages/         <- UI router pages. Pages created for demonstration purposes. Put your application js and html files here
│   │   ├── theme/         <- theme components. Contains various common widgets, panels which used across application
│   ├── assets/             <- static files (images, fonts etc.)
│   ├── sass/               <- sass styles
│   │   ├── app/           <- application styles. Used mostly for demonstration purposes. Put your app styles here.
│   │   ├── theme/         <- theme styles. Used to customize bootstrap and other common components used in tempate.
```



