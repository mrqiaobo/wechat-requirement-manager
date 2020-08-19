// pages/requirements/add/index.wxml.js
import { insertToDb } from '../../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deadlineDate: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  onShareAppMessage: function () {
  },
  bindDateChange: function(e) {
    this.setData({
      deadlineDate: e.detail.value
    });
  },

  /**
   * 用户提交需求表单
   * @param {*} e 
   */
  bindOnSubmit: function(e) {
    //获取表单数据以及state的数据
    const requirementTitle = e.detail.value.requirementName;
    const requirementDetail = e.detail.value.requirementDetail;
    const requirementDeadline = this.data.deadlineDate;
    const userInfo = wx.getStorageSync('userInfo');

    console.log("submit context is:");
    console.log(requirementTitle);
    console.log(requirementDetail);
    console.log(requirementDeadline);
    console.log(userInfo);

    //向数据库插入新数据
    const data = {
      deadline: requirementDeadline,
      detail: requirementDetail,
      priority: 0,
      proposeDate: new Date(),
      proposer: userInfo,
      status: 'init',
      title: requirementTitle
    };
    //插入数据库后的回调函数
    const success = function(res) {
      console.log(res);
      wx.showToast({
        title: '添加成功',
        duration: 3000
      });
      
      wx.hideToast({
        success: (res) => {
          wx.reLaunch({
            url: '/pages/index/index',
          });
        },
      })
    }
    insertToDb(data, success);
  }
});
