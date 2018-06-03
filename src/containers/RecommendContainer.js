import { connect } from 'react-redux';
import Recommend from '../components/Recommend';

const mapStateToProps = state => ({
  showCategoryPicker: state.recommend.showCategoryPicker,
  currentRestaurant: state.recommend.currentRestaurant
});

const RecommendContainer = connect(
  mapStateToProps
)(Recommend);


export default RecommendContainer;