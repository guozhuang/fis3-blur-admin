
# 接口文档




## 存号箱

### 需确定请求地址及参数确定：
```js
{
	url: "/a/${gameNameShort}-ka/pickedcode.json", //GET请求地址
	//请求参数
	data:{
		page:1
	}
}
```

### 返回数据：
```js
{
  "more": true, //是否可加载更多
  "list": [
    {
      "gameNameShort": "tlbb3D5255", //游戏缩写
      "welfareId": 3518, //礼包id
      "title": "《天龙八部3D》绝世神技礼包",//已淘礼包标题
      "icon": "http://apps2.bdimg.com/store/static/kvt/4a3c196a801d63aded71bfc7785bea45.jpg", //礼包icon图片地址
      "expire": false, //礼包是否已过期，注：只标识礼包是否过期
      "codes": ["T1Y59JVDHPV-1","T1Y59JVDHPV-2","T1Y59JVDHPV-3"] //兑换码列表
    }  
  ]
}
```
>确定：淘号提示文案`淘到的号尽快兑换哦，兑换晚了可能被别人抢走！`是否写死？


##礼包详情页和所有礼包列表项

### 新增数据

```js
{
	"pickedTimes":23, //代表已淘号次数
	"stat":13/14  //新增13：代表 ； 14： 淘号次数过多
}
```



### 淘号接口地址及其所传参数确定：

```js
{
	url: "/a/${gameNameShort}-libao/pickcode.json", //POST请求地址
	//请求参数
	data:{
		packageId: id  //礼包id
	}
}
```

### 返回数据确定：

```js
{
  "data": {
	//淘号返回状态值：
	//ret:
    //* 1. 短时间内重发请求返回状态1（已淘），
    //* 2. 预约过并预约成功
    //* 3. 淘号成功
    //* 4. 淘号失败
    //* 5. 不在发放时间内  
    //* 6. 补仓
    //* 7. 淘号次数过多……
    "ret": 3,               
    "times":234,               //已经淘号的次数 --- 用于标示是否首次，为1时展示文案首次……
    "key":"xxxxxxxxxxxxxxxxx", //淘号成功时的兑换码
    "gameInfo":{
		"pkg": "com.hummingbird.wuhujiang.QiTianBaiDuWuHuJiang.baidu", //packagename of game
		"version": "2.5.0",//游戏版本
		"icon": "http://apps2.bdimg.com/store/static/kvt/f1290fccd82d9e643dc1a7862b3d1639.png",//游戏图标地址
		"gameName": "抢滩登陆3D",//游戏名称
		"size": "189.64M",//游戏大小
		"downloadUrl": "http://duokoo.baidu.com/game/?pageid=Hdkicssp&p_tag=952758",
		"gameId": "131061" //游戏id
	}
  }
}
```



## 其他



 







