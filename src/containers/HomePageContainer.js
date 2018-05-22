import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = state => ({
  showCategoryPicker: state.CategoryPicker.showCategoryPicker
});

const HomePageContainer = connect(
  mapStateToProps
)(HomePage);


export default HomePageContainer;