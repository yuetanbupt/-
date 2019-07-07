// pages/recommend/recommend.js
var app = getApp();
var time = ""; 
Page({
  data:{
    age: "",
    glasses: "",
    beauty: "",
    mask: "",
    hat: "",
    gender: "",
    hair_length: "",
    hair_bang: "",
    hair_color: "",
    line_1:"",
    line_2:"",
    line_3: "",
    line_4: "",
    line_5: "",
    line_6: "",
    line_7: "",
    line_8: "",
    line_9: "",
    flag : true,
    image_src:"cloud://test-529d6c.7465-test-529d6c/人像采集.png",
    //image_src: "https://cdn-img.easyicon.net/image/2019/panda-index.svg"
    array: ['红色', '蓝色', '黑色', '黄色'],
    objectArray: [
      {
        index: 0,
        name: '红色'
      },
      {
        index: 1,
        name: '蓝色'
      },
      {
        index: 2,
        name: '黑色'
      },
      {
        index: 3,
        name: '黄色'
      }
    ],
    index: 0,
    multiArray: [['春秋佩戴', '冬季佩戴'], ['薄款红色', '薄款黑色', '薄款蓝色', '黄色', '防晒丝巾'],],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '春秋佩戴'
        },
        {
          id: 1,
          name: '冬季佩戴'
        }
      ], [
        {
          id: 0,
          name: '薄款红色'
        },
        {
          id: 1,
          name: '薄款黑色'
        },
        {
          id: 2,
          name: '薄款蓝色'
        },
        {
          id: 3,
          name: '黄色'
        },
        {
          id: 3,
          name: '防晒丝巾'
        }
      ],
    ],
    multiIndex: [0, 0],

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init({
      env: 'test-529d6c'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  
 // Onwatchinput: function(event){
  //  this.setData({
   //   rad_num:event.detail.value
  //})

  //},

  findimage: function (e) {
      //wx.setStorageSync('rad_num', e.data.rad_num);
      var gender = e.currentTarget.dataset.gender;
      var age = e.currentTarget.dataset.age;
      var hair_length = e.currentTarget.dataset.hair_length;
      var hair_color = e.currentTarget.dataset.hair_color;
      var that=this;
      //console.log(rad_num)
      if(gender=="女" && age<30 && hair_length=='长发' && hair_color=='黑色'){
        that.setData(
          { picture: "cloud://test-529d6c.7465-test-529d6c/3f0b218f4a98c4841c5831df35a8b7e.jpg",
            msg: "该款丝巾采用的是水墨画色调绘制的花朵图案的短款丝巾，风格适中，可以佩戴在颈间或者系在手提包上，给人以温婉淡雅的南方水乡女子感觉，适合年轻女孩使用。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6"
            })
      }
      else if (gender == "女" && age < 30 && hair_length == '长发' && hair_color == '棕色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/25ed12fbbc0cab8a5fa9ca45f06c9e4.jpg",
          msg: "该款产品采用明黄色光晕为底色，颜色亮丽多样的马赛克为叠加图案。风格活泼，较为明朗，适合活泼开朗的年轻女孩。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && age < 30 && hair_length == '长发' && hair_color == '金色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/3429ddc6716f572f718334398f10f81.jpg",
          msg: "黑白相间的色调，配以蝴蝶翩飞的图案，严肃而又不失轻快，给人俏皮的感觉，适合刚步入职场的女性。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && age < 30 && hair_length == '短发' && hair_color == '黑色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/67cd32f3175be04b934d3d21898275b.jpg",
          msg: "整体呈方形款式，摒弃了传统长方形丝巾，款式特别，具有时尚感。颜色多样，色调明丽，整体感觉较为活泼，图案采用生动的鸟兽与蔓藤，给人以轻松明丽的审美愉悦感，适合年轻女性。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && age < 30 && hair_length == '短发' && hair_color == '棕色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/9b031bdad5dbfd3c855c3b499f787b0.jpg", 
        msg: "该款丝巾为玛瑙绿的底色，配以放射状的太阳光芒的黄色图案，给人以强烈的视觉冲击感与色调鲜明感，适合个性张扬，宣扬自我的年轻女孩使用。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && age < 30 && hair_length == '短发' && hair_color == '金色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/1cde524fbacf3b47a9543abc317cb14.jpg",
        msg: "该款丝巾整体颜色对比度较强，且图案意向鲜明，大嘴鸟与树丛花朵相辅相成，风格清奇，适合个性鲜明，我行我素的率真女性佩戴，短发为宜。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 30 <= age < 45 && hair_length == '长发' && hair_color == '黑色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/16403dc740107770775423ef36fe8c8.jpg",
          msg: "基础款的红色丝巾，搭配深色大衣，偏正式场合佩戴，适合中年女性。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 30 <= age < 45 && hair_length == '长发' && hair_color == '棕色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/8de1e62fa8b2106f1e74daea8899de2.jpg",
          msg: "白蓝相间的素调丝巾，青花瓷样式的图案，对于穿着素雅冷淡风的肤白女性比较适合，长短发皆合适。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 30 <= age < 45 && hair_length == '长发' && hair_color == '金色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/d1ccf92bc1edf533025f05a3c2773a1.jpg",
          msg: "本款以中国画水墨晕染撞色形式处理，使产品整体古典大气，纹路较为特别。颜色多样艳丽，大方又不失活泼。建议长发的女性使用。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 30 <= age < 45 && hair_length == '短发' && hair_color == '黑色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/67a888de1af84afb314c7ecb5bc20b8.jpg",
          msg: "蓝色底调的丝巾，搭配多样而又不繁杂的花朵图案，较为百搭，适合年轻和中年的人群。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 30 <= age < 45 && hair_length == '短发' && hair_color == '棕色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/ba9627b06de4d3486b4e0ebca80173d.jpg",
          msg: "该丝巾整体颜色纷繁多样，且配色偏暖色调，中间的一只大蝴蝶配以四周五颜六色的小蝴蝶，给人以温暖春天的感觉，适合温柔的中年女性。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 30 <= age < 45 && hair_length == '短发' && hair_color == '金色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/5f0f488bc7d3b7ae3e34dde4aa57c6a.jpg",
          msg: "该款丝巾为白色底调，并配以麻雀，鹦鹉等小型鸟类嬉闹枝头的图案，整体氛围偏活泼轻快，推荐中年女性使用。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 45 <= age < 60 && hair_length == '长发' && hair_color == '黑色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/d0c04775a39d21521e735f2668305b3.jpg",
          msg: "整体色调偏灰白，风格淡雅，适合崇尚纯洁的中年女性，长短发皆宜，长发更佳。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 45 <= age < 60 && hair_length == '长发' && hair_color == '棕色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/33886a3635b27813de6f8e624f645ab.jpg",
          msg: "本款以风景油画为主要因素，内容唯美，笔触清晰可见。色调偏暗，大方典雅，适合喜欢油画的中老年女性使用，建议长发。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 45 <= age < 60 && hair_length == '长发' && hair_color == '金色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/81100b8154ed16f70cbf06f599b7316.jpg",
          msg: "该款丝巾摒弃了传统的大片渲染图案而是采用了一格一格的独立图案，三种色调的月季花交相呼应，给人以婉约而又不失大气的感觉适合中年女性，长短发皆适宜。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 45 <= age < 60 && hair_length == '短发' && hair_color == '黑色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/c4ffd35b5d9da58acbdbdd239db409d.jpg",
          msg: "鲜明的绿色色调，柿子树的橘黄色图案，给人以温婉朴实的感觉，更适合40岁以上年龄段的女人，短发为宜。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 45 <= age < 60 && hair_length == '短发' && hair_color == '棕色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/b36b9b94192d8337ece1fb88092851e.jpg",
          msg: "本款丝巾采用较为大方的条纹纹路，整体色调偏明黄，呈渐变趋势向下递深，适合中长发的中年女性。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if (gender == "女" && 45 <= age < 60 && hair_length == '短发' && hair_color == '金色') {
        that.setData({ picture: "cloud://test-529d6c.7465-test-529d6c/94e17734dfdffb1bbe3f75ab71330ae.jpg",
          msg: "该款丝巾整体偏淡墨绿，图案为水墨渲染的河边景色，适合清淡素雅的长发女性佩戴。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6" })
      }
      else if(gender=="男"){
        that.setData({ picture:"cloud://test-529d6c.7465-test-529d6c/69584ccb9cc9c1f90b31f3a564823c3.jpg",
          msg: "您是一位英俊的中年男性，围巾可以很好的起到装饰作用，提高您的品味。复制链接在浏览器中打开即可购买哦https://m.tb.cn/h.eWr7sFS?sm=e6a1c6"})
      }
      else{
        that.setData({ picture:"cloud://test-529d6c.7465-test-529d6c/错误.jpg",
          msg: "上传错误哦，小丝建议您重新上传~"})   
      }
    that.setData({ flag: false })
  
  },
  
  hide:function(){
    this.setData({ flag : true })
  },

  chooseimage: function(){
    var that=this
    var random = Date.parse(new Date()) + Math.ceil(Math.random() * 1000)
    wx.chooseImage({
      count:1,
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success:res=> {
        wx.showLoading({
          title: '加载中...',
        })
        const tempFilePaths = res.tempFilePaths[0]
        console.log(tempFilePaths) 
        that.setData({
          image_src: res.tempFilePaths[0]
        });
        var uploadTask = wx.cloud.uploadFile({
            cloudPath:random+'.jpg',
            filePath:tempFilePaths,
            success:res=>{
              console.log(res.fileID)
              wx.cloud.callFunction({
                name:'facedetection',
                data:{
                  fileID:res.fileID
                },
                success:res=>{
                  wx.hideLoading()
                  wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration : 500
                  })
                  //console.log(res.result.FaceInfos[0].FaceAttributesInfo.Beauty)
                  that.setData({
                    age: res.result.FaceInfos[0].FaceAttributesInfo.Age,
                    glasses: res.result.FaceInfos[0].FaceAttributesInfo.Glass,
                    beauty: res.result.FaceInfos[0].FaceAttributesInfo.Beauty,
                    mask: res.result.FaceInfos[0].FaceAttributesInfo.Mask,
                    hat: res.result.FaceInfos[0].FaceAttributesInfo.Hat,
                    gender: res.result.FaceInfos[0].FaceAttributesInfo.Gender,
                    hair_length: res.result.FaceInfos[0].FaceAttributesInfo.Hair.Length,
                    hair_bang: res.result.FaceInfos[0].FaceAttributesInfo.Hair.Bang,
                    hair_color: res.result.FaceInfos[0].FaceAttributesInfo.Hair.Color
                  })
                  if (res.result.FaceInfos[0].FaceAttributesInfo.Gender < 50) {
                    that.setData({
                      gender: "女"
                    });
                  }
                  else{
                    that.setData({
                      gender: "男"  
                    })
                  };
                  switch (res.result.FaceInfos[0].FaceAttributesInfo.Hair.Length){
                    case 0:
                      that.setData({
                        hair_length: "光头"
                      });
                      break;
                    case 1:
                      that.setData({
                        hair_length: "短发"
                      });
                      break;
                    case 2:
                      that.setData({
                        hair_length: "短发"
                      });
                      break;
                    case 3:
                      that.setData({
                        hair_length: "长发"
                      });
                      break;
                    case 4:
                      that.setData({
                        hair_length: "长发"
                      });
                      break;
                  }
                  switch (res.result.FaceInfos[0].FaceAttributesInfo.Hair.Bang) {
                    case 0:
                      that.setData({
                        hair_bang: "有刘海"
                      });
                      break;
                    case 1:
                      that.setData({
                        hair_bang: "无刘海"
                      });
                      break;
                  }
                  switch (res.result.FaceInfos[0].FaceAttributesInfo.Hair.Color) {
                    case 0:
                      that.setData({
                        hair_color: "黑色"
                      });
                      break;
                    case 1:
                      that.setData({
                        hair_color: "金色"
                      });
                      break;
                    case 2:
                      that.setData({
                        hair_color: "棕色"
                      });
                      break;
                    case 3:
                      that.setData({
                        hair_color: "灰白色"
                      });
                      break;
                  }  
                },
              })
              var mythis=this;
              mythis.setData({ line_1:"根据提供的照片小丝可以看出"});
              mythis.setData({ line_2: "你是一位大约" });
              mythis.setData({ line_3: "岁" });
              mythis.setData({ line_4: "并且拥有超高颜值的" });
              mythis.setData({ line_5: "性" });
              mythis.setData({ line_6: "照片中你有着" });
              mythis.setData({ line_7: "并且小丝看到你" });
              mythis.setData({ line_8: "根据以上和其他小丝收集到的信息" });
              mythis.setData({ line_9: "为你推荐了适合的专属丝巾" });
              
            },
            fail: error => {
            }
        })
        uploadTask.onProgressUpdate((res)=>{
          that.setData({
            progress:res.progress
          })
        })

        
        /*wx.getFileSystemManager().readFile({
          filePath:res.tempFilePaths[0],//选择图片返回的相对路径
          encoding:'base64',//编码格式
          success:res=>{
            //console.log('data:image/jpeg;base64,'+res.data);
            app.globalData.base64 = res.data;
            console.log(app.globalData.base64);转码成base64*/
        }
          
    })     
  },

  test:function(){
    
  },

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerColumnChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['薄款红色', '薄款黑色', '薄款蓝色', '黄色', '防晒丝巾']

            break
          case 1:
            data.multiArray[1] = ['真丝拉绒长款', '羊绒披肩', '羊绒围巾']

            break
        }
        data.multiIndex[1] = 0
        data.multiIndex[2] = 0
        break
    }
    console.log(data.multiIndex)
    this.setData(data)
  },

})  
