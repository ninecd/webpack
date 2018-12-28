// 需要loader解析转化
require('./main.css')

const show = require('./show.js')

show('webpack')

// if (module.hot) {
//   // 检测是否有模块热更新
//   module.hot.accept("./main.css", function() {
//     // 针对被更新的模块, 进行进一步操作
//     console.log('222222')
//   });
// }
