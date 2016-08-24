//由于使用了bower，有很多非必须资源。通过set project.files对象指定需要编译的文件夹和引用的资源
fis.set('project.files', ['mock/**', 'map.json', 'src/**',]);

fis.set('statics', '/statics'); //static目录

//FIS modjs模块化方案，您也可以选择amd/commonjs等
// fis.hook('module', {
//     mode: 'mod'
// });



/*************************目录规范*****************************/


fis.match("**/*", {
  release: '${statics}/$&'
});


fis.match("src/(*.html)", {
        release: '$1'
});



//assets:字体，图片等目录，因为硬编码到js,scss文件中，先单独发布父级目录
fis.match("src/assets/(**)", {
        release: '/assets/$1'
});


// 模拟数据目录
fis.match("mock/**", {
  release: "/$&"
});



/****************异构语言编译*****************/
//less的编译
//npm install [-g] fis-parser-less
fis.match('**/*.less', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('less', {
        //fis-parser-less option
    })
});


//sass 的编译
//npm install [-g] fis-parser-sass
fis.match('src/sass/**.scss', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('node-sass', {
        //fis-parser-less option
    })
});


//打包与css sprite基础配置
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
// })



/**********************生产环境下CSS、JS压缩合并*****************/
//使用方法 fis3 release prod
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