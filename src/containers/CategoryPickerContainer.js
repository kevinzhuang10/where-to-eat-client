import { connect } from 'react-redux';
import {handleClickCategoryChip, handleGetRecommendations, inputLocation, changeAddress} from '../actions/recommend';
import CategoryPicker from '../components/CategoryPicker';

const mapStateToProps = state => ({
  categoryStates: state.recommend.categoryStates,
  userLocation: state.recommend.userLocation
});

const mapDispatchToProps = dispatch => ({
  handleClickCategoryChip: categoryIndex => dispatch(handleClickCategoryChip(categoryIndex)),
  handleGetRecommendations: () => dispatch(handleGetRecommendations()),
  inputLocation: (e) => dispatch(inputLocation(e.target.value)),
  changeAddress: (addressObject) => dispatch(changeAddress(addressObject))
});

const CategoryPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPicker);


export default CategoryPickerContainer;