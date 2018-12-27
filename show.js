// 定义工具函数
function show (content) {
  window.document.getElementById('app').innerText = 'hello ' +  content
}

// commonJS规范导出show方法
module.exports = show;