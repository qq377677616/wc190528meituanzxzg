//index.js
//获取应用实例
const app = getApp()
const mta = require('../../utils/mta_analysis.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currtab:1,//当前选项
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    mta.Page.init()//腾讯统计
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  linkDel(){//点击去列表详情
    wx.navigateTo({
       url: '/pages/deltail_list/deltail_list'
    })
  },
  linkbrowse() {// 点击搜索
    wx.navigateTo({
      url: '/pages/browse/browse'
    })
  },
  tabcheck(options){
    // this.currtab = options.currentTarget.dataset.tab;
    //  console.log(options.currentTarget.dataset.tab);
    this.setData({
      currtab: options.currentTarget.dataset.tab
    })
    console.log(this.currtab);
  },
  prosl(){//跳转到我的收藏
       wx.navigateTo({
          url:"/pages/collection/collection"
       })
  },
  outpage(){
    console.log(1)
       wx.navigateTo({
           url: './out'
       })
  },
  gostroe(){
    wx.navigateToMiniProgram({
      appId: 'wx8b272108271dd522',
      path: '',
      extraData: {},
      envVersion: '',
      success(res) {
        // 打开成功
        console.log(11)
      }
    })
  }
})
