import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = state => ({
  showCategoryPicker: state.CategoryPicker.showCategoryPicker,
  currentRestaurant: state.CategoryPicker.currentRestaurant
});

const HomePageContainer = connect(
  mapStateToProps
)(HomePage);


export default HomePageContainer;