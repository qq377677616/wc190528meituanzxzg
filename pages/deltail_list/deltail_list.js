const wxhttp = require('../../utils/wxhttp.js');
const app = getApp();
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
     remarkshow: false,//控制评论区域显示
     c_img:false,//控制点击长图文分享的遮罩显示
    //  succpop:false,//提交留言成功
     toView:'',
     boxHeight:0,
    //  imgurl:'',//图片路径
    //  shareimgpath:'',//分享图片的路径
    //  screenwidth:'',//设备屏幕宽度
    //  shareimgsrc:'',
    //  texts:'',//文字保存
    //  shareTempFilePath:'',
     canshow:true,
    //  imgarr:'',//下载网络图
     zanshow:true,
     remarkarr:[1,2,3,4,5,6],
     colled:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(22)
    var that = this;
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight - 50;
    this.setData({
      'boxHeight': boxHeight
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data.shareimgsrc)
    // var that = this;
    // var context = wx.createCanvasContext('share');
    // context.setStrokeStyle("#fff");
    // context.setLineWidth(1);
    // context.stroke();
    // context.draw(false,this.getTempFilePath);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (option) {
    console.log(option);
    let obj ={
      title:'热点：赵薇中一百五，差点猝死',
      path:'/pages/deltail_list/deltail_list',
      imageurl:'http://game.flyh5.cn/resources/game/wechat/file/mtimg/page1_30.png'
    };
    return wxhttp.shareEvent(option,obj);
  },
  bindscroll(){
     this.setData({
       remarkshow:false
     })
  },
  remarkare(){//点击评一下
    this.setData({
        remarkshow:true
    })
  },
  areahidden(){// 点击遮罩
    this.setData({
      remarkshow: false,
      c_img:false
      // succpop: true
    })
  },
  submittalk(){ //画图主要逻辑
      this.setData({
        c_img:true
      })  
  },
  settop(){//  点击跳转到评论区域
      this.setData({
        toView:'comeview' 
      })
  },
  lysub(){
       console.log('点击留言提交')
  },
  gostroe() {//跳转到美团小程序
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
  },
  clickzan(options){//点赞收藏
    console.log(options.currentTarget);
  },
  givelike(){
     this.setData({
       colled:!this.data.colled
     })
  },
  delremark(){  // 删除评论提示
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})