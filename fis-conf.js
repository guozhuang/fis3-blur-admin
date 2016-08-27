//由于使用了bower，有很多非必须资源。通过set project.files对象指定需要编译的文件夹和引用的资源
fis.set('project.files', ['mock/**', 'map.json', 'src/**']);

fis.set('statics', '/statics'); //static目录


/*************************release目录结构****************************/
//开发环境
/*
 ├── mock/                  <- 前端模拟数据（需要进入插件解决跨域问题）
 ├── statics/               <- 所有静态资源都会放入此目录下
 │   ├── app/               <- angular application files
 │   │   ├── pages/         <- app所有的静态模板,保持与源码的目录结构一致……
 │   │   ├── theme/         <- 所有公用组件等的静态模板，保持与源码的目录结构一致……
 │   ├── assets/            <- static files (images, fonts etc.)
 │   ├── pkg/               <- js,css合并至此目录
 │   │   ├── index.pkg.css
 │   │   ├── index.pkg.js
 ├── 404.html
 ├── auth.html
 ├── auth.html
 ├── index.html
 ├── map.json            <- 静态资源映射表

 */


// fis.match("**/*", {
//     release: false
// });
//
// // fis.match("src/(**)", {
// //     release: '${statics}/$&'
// // });

//页面入口,页面模板
fis
    .match("src/app/(**.html)", {
      release: '${statics}/app/$1'
    })
    .match("src/(*.html)", {
      release: '$1'
    });


//assets:字体，图片等目录
fis.match("src/assets/(**)", {
  release: 'statics/assets/$1'
});


// 模拟数据目录
fis.match("mock/**", {
  release: "/$&"
});


/****************异构语言编译*****************/



//sass 的编译
//npm install [-g] fis-parser-sass
fis.match('src/sass/(**.scss)', {
  rExt: '.css', // from .scss to .css
  parser: fis.plugin('node-sass', {}),
  release: "/statics/$1"
});

//忽略_*.js,不产出目录,合并
// fis.match('src/app/**.js', {
//   release: false
// });




fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    allInOne: {
      js: function (file) {
        return "statics/pkg/" + file.filename + ".pkg.js";
      },
      css: function (file) {
        return "statics/pkg/" + file.filename + ".pkg.css";
      }
    }
  })
});


//忽略_*.scss文件,不产出,合并~
fis.match('_*.scss', {
  release: false
});
fis.match('src/(**.js)', {
  release: "/statics/$1"
});
fis.match('bower_components/**', {
  release: "/statics/$&"
});


// //打包与css sprite基础配置
// fis.match('::packager', {
//     // npm install [-g] fis3-postpackager-loader
//     // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
//     postpackager: fis.plugin('loader', {
//         resourceType: 'mod',
//         useInlineMap: true // 资源映射表内嵌
//     }),
//     packager: fis.plugin('map'),
//     spriter: fis.plugin('csssprites', {
//         layout: 'matrix',
//         margin: '15'
//     })
// });


// todo QA环境打包部署fis配置
fis.media('qa')
//注意压缩时.async.js文件是异步加载的，不能直接用annotate解析
    .match('**.js', {
      preprocessor: fis.plugin('annotate'),
      optimizer: fis.plugin('uglify-js')
    })
    .match('/**(.async).js', {
      preprocessor: null,
      optimizer: null
    })
    .match('**.css', {
      optimizer: fis.plugin('clean-css')
    })
    .match("lib/mod.js", {
      packTo: "/pkg/vendor.js"
    })
    //所有页面中引用到的bower js资源
    .match("bower_components/**/*.js", {
      packTo: "/pkg/vendor.js"
    })
    //所有页面中引用到的bower css资源
    .match("bower_components/**/*.css", {
      packTo: "/pkg/vendor.css"
    });


// todo 生产环境下打包测试fis配置
fis.media('prod')
//注意压缩时.async.js文件是异步加载的，不能直接用annotate解析
    .match('**.js', {
      preprocessor: fis.plugin('annotate'),
      optimizer: fis.plugin('uglify-js')
    })
    .match('/**(.async).js', {
      preprocessor: null,
      optimizer: null
    })
    .match('**.css', {
      optimizer: fis.plugin('clean-css')
    })
    .match("lib/mod.js", {
      packTo: "/pkg/vendor.js"
    })
    //所有页面中引用到的bower js资源
    .match("bower_components/**/*.js", {
      packTo: "/pkg/vendor.js"
    })
    //所有页面中引用到的bower css资源
    .match("bower_components/**/*.css", {
      packTo: "/pkg/vendor.css"
    });