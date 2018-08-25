export default {
  clickedCity (state, city) {
    state.currentCity = city
    try {
      localStorage.currentCity = city
    } catch (e) {}
  }
}
