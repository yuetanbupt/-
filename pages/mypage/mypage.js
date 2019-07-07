// pages/mypage/mypage.js
var app = getApp();
Page({


  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['群聊', '好友', '朋友圈'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPublishClick:function (){
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  onCollectionClick:function (){
    wx.navigateTo({
      url: '../collection/collection',
    })
  },
  onHistoryClick: function () {
    wx.navigateTo({
      url: '../history/history',
    })
  },

  about_us : function (){
    this.setData({ flag:false })
  },
  
  hide: function () {
    this.setData({ flag: true })
  },
})