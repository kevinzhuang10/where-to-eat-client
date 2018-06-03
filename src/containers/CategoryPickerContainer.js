import { connect } from 'react-redux';
import {handleClickCategoryChip, handleGetRecommendations} from '../actions/recommend';
import CategoryPicker from '../components/CategoryPicker';

const mapStateToProps = state => ({
  categoryStates: state.recommend.categoryStates
});

const mapDispatchToProps = dispatch => ({
  handleClickCategoryChip: categoryIndex => dispatch(handleClickCategoryChip(categoryIndex)),
  handleGetRecommendations: () => dispatch(handleGetRecommendations())
});

const CategoryPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPicker);


export default CategoryPickerContainer;