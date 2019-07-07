// pages/introduction/introduction.js
var that
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalCount: 0,
    topics: {},
    text1:0,
    up_num: 0,
    comment_num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    wx.cloud.init({
      traceUser:true,
      env: app.globalData.evn
    })
  },

  onShow: function () {
    that.getData();
  },
  /**
   * 获取列表数据
   * 
   */
  getData: function () {
    const db = wx.cloud.database();

    db.collection('topic')
      .orderBy('date', 'desc')
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log("数据：" + res.data)
          that.data.topics = res.data;
          that.setData({
            topics: that.data.topics,
          })
          wx.hideNavigationBarLoading(); //隐藏加载
          wx.stopPullDownRefresh();

        },
        fail: function (event) {
          wx.hideNavigationBarLoading(); //隐藏加载
          wx.stopPullDownRefresh();
        }
      })

  },
  /**
   * item 点击
   */
  onItemClick: function (event) {
    var id = event.currentTarget.dataset.topicid;
    var openid = event.currentTarget.dataset.openid;
    console.log(id);
    console.log(openid);
    wx.navigateTo({
      url: "../homeDetail/homeDetail?id=" + id + "&openid=" + openid
    })
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    that.getData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var temp = [];
    // 获取后面十条
    if (this.data.topics.length < this.data.totalCount) {
      const db = wx.cloud.database();
      db.collection('topic').get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          if (res.data.length > 0) {
            for (var i = 0; i < res.data.length; i++) {
              var tempTopic = res.data[i];
              console.log(tempTopic);
              temp.push(tempTopic);
            }

            var totalTopic = {};
            totalTopic = that.data.topics.concat(temp);

            console.log(totalTopic);
            that.setData({
              topics: totalTopic,
            })
          } else {
            wx.showToast({
              title: '没有更多动态了',
            })
          }
        },
      })
    } else {
      wx.showToast({
        title: '没有更多动态了',
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getCommentNum(){
    var that = this
    const db = wx.cloud.database()
    db.collection('comment').where({
      r_id: '08560c9e5d00f92c002af362030651da'
    }).count({
      success: function (res) {
        console.log("r_id=08560c9e5d00f92c002af362030651da", res.total)
        that.setData({
          text1: res.total
          })
      }
      })
  }
})