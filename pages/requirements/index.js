// pages/requirements/index.js
import { getListFromDb } from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requirementList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    getListFromDb(function(res) {
      console.log(res.data);
      _this.setData({
        requirementList: res.data
      })
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

  /**
   * 点击添加按钮添加需求
   */
  onClickAdd: function() {
    wx.navigateTo({
      url: './add/index',
    })
  },

  /**
   * 点击触发详情页面
   */
  onClickDetail: function(e) {
    console.log(`id is: ${e.currentTarget.id}`)
    console.log(e);
    wx.navigateTo({
      url: `./detail/index?id=${e.currentTarget.id}`,
    })
  }
})