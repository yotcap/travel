let defaultCity = '北京'
// 检查是否启用了 localStorage
try {
  if (localStorage.currentCity) {
    defaultCity = localStorage.currentCity
  }
} catch (e) {}

export default {
  currentCity: defaultCity
}
