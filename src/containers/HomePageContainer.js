import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = state => ({
  showCategoryPicker: state.recommend.showCategoryPicker,
  currentRestaurant: state.recommend.currentRestaurant
});

const HomePageContainer = connect(
  mapStateToProps
)(HomePage);


export default HomePageContainer;