module.exports = function(req, res, next) {

  //返回json
  res.json({
    "code": "200",
    "msg": "成功",
    "pageInfo": {
      "total": 10,
      "per_page": 10,
      "current_page": 1,
      "total_row":100
    },
    "list": [
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 0,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":1
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 1,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":2
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 0,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":1
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 1,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":2
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 0,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":2
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 1,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":1
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 0,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":1
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 1,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":2
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 0,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":2
      },
      {
        "id": Math.random().toString().split(".")[1],
        "ad_name": "广告名",
        "ad_date": "2016-07-18 10:10:20",
        "ad_img": "http://ad.jpg",
        "ad_btn_url": "http://www.baidu.com#ad_btn_url",
        "ad_auth": "admin",
        "ad_up_status": 1,
        "ad_url": "http://www.baidu.com#ad_url",
        "ad_offline_url": "http://www.baidu.com#ad_offline_url",
        "linkType":1
      }
    ]
  });


};