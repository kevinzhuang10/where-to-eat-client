import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = state => ({
  showCategoryPicker: state.CategoryPicker.showCategoryPicker,
  currentRestaurant: state.RestaurantPicker.currentRestaurant
});

const HomePageContainer = connect(
  mapStateToProps
)(HomePage);


export default HomePageContainer;