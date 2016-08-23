module.exports = function (req, res, next) {

  //返回json
  res.json({
    "code": "200",
    "msg": "成功",
    "data": {
      "id": "1dfxxxx3",
      "ad_name": "广告名",
      "linkType": 2,
      "ad_img": "http://img.m.duoku.com/cimages/img/22076/22076.png",
      "ad_btn_url": "http://www.baidu.com",
      "ad_url": "http://....",
      "ad_btn_pos": "0,0,100,100",
      "ad_close_pos": "100,100,100,100"
    }
  });

};