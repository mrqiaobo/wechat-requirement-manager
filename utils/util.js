const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const insertToDb = function(data, callback) {
  const db = wx.cloud.database();
  db.collection("requirements").add({data, success:callback });
}

const getListFromDb = function (callback) {
  const db = wx.cloud.database();
  db.collection("requirements").orderBy("priority", "asc").get({
    success: callback
  });
}

const getRequirementById = function(id, callback) {
  const db = wx.cloud.database();
  db.collection("requirements").doc(id).get({
    success: callback
  });
}

module.exports = {
  formatTime: formatTime,
  insertToDb: insertToDb,
  getListFromDb: getListFromDb,
  getRequirementById: getRequirementById
}
