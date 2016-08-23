


```
├── fis-conf.js              <- fis3 配置文件
├── bower.json               <- front-end library dependencies
├── package.json             <- mostly task runner dependencies
├── map.json                 <- 记录静态资源映射表，解决资源模块依赖，按需加载问题
├── docs/                    <- 前端数据接口
├── mock/                   <- 前端模拟数据（需要进入插件解决跨域问题）
├── gulp/                    <- build tasks
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







[![Build Status](https://travis-ci.org/akveo/blur-admin.svg?branch=master)](https://travis-ci.org/akveo/blur-admin)

# BlurAdmin Angular admin panel front-end framework

Customizable admin panel framework made with :heart: by [Akveo team](http://akveo.com/). Follow us on [Twitter](https://twitter.com/akveo_inc) to get latest news about this template first!

### Demo
**[Mint version demo](http://akveo.com/blur-admin-mint/)**             |  **[Blur version demo](http://akveo.com/blur-admin/)**
:-------------------------:|:-------------------------:
![Mint version demo](http://i.imgur.com/A3TMviJ.png)  |  ![Blur version demo](http://i.imgur.com/EAoiK2O.jpg)

## Angular 2 version
Here you can find Angular2 based version: [ng2-admin](https://github.com/akveo/ng2-admin).

### Documentation
Installation, customization and other useful articles: https://akveo.github.io/blur-admin/

*If you have problems installing and just want to download JS and css files, you can find download links here*: http://akveo.github.io/blur-admin/articles/091-downloads/

## How can I support developers?
- Star our GitHub repo
- Create pull requests, submit bugs, suggest new features or documentation updates
- Follow us on [Twitter](https://twitter.com/akveo_inc)
- Like our page on [Facebook](https://www.facebook.com/akveo/)

## Can I hire you guys?
Yes! We are available for hire. Visit [our homepage](http://akveo.com/) or simply leave us a note to contact@akveo.com. We will be happy to work with you!

## Features
* Responsive layout
* High resolution
* Bootstrap CSS Framework
* Sass
* Gulp build
* AngularJS
* Jquery
* Charts (amChart, Chartist, Chart.js, Morris)
* Maps (Google, Leaflet, amMap)
* etc

License
-------------
<a href=/LICENSE.txt target="_blank">MIT</a> license.

### From akveo

Enjoy!
We're always happy to hear your feedback.
