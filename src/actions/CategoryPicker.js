export const HANDLE_CLICK_CATEGORY_CHIP = 'HANDLE_CLICK_CATEGORY_CHIP';

export const handleClickCategoryChip = (categoryIndex) => {
  return {
    type: HANDLE_CLICK_CATEGORY_CHIP,
    categoryIndex
  };
};

export const handleGetRecommendations = () => {
  if (this.state.selectedCategories.length > 0) {
    let lat = '37.760737';
    let lon = '-122.467954';
    let queryString = `term=${this.state.selectedCategories.join('+')}&latitude=${lat}&longitude=${lon}`;
    // this.getRecommendations(queryString);
  }
}

// async getRecommendations(queryString) {
//   let endPoint = 'recommend/index?';
//   let devURL = process.env.REACT_APP_SERVER_API_URL + endPoint + queryString;
//   console.log('sending request', devURL);
//   let result = await axios.get(devURL);
//   console.log(result.data);
//   let restaurants = result.data;
//   let currentRestaurant = restaurants.pop();
//   // this.setState({
//   //   availableOptions: restaurants,
//   //   currentRestaurant: currentRestaurant
//   // });
// }