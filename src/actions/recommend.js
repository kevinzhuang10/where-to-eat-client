import axios from 'axios';
export const HANDLE_CLICK_CATEGORY_CHIP = 'HANDLE_CLICK_CATEGORY_CHIP';
export const HANDLE_DELETE_CATEGORY = 'HANDLE_DELETE_CATEGORY';
export const REQUEST_RECOMMENDATIONS = 'REQUEST_RECOMMENDATIONS';
export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS';
export const SELECT_YES = 'SELECT_YES';
export const SELECT_NEXT = 'SELECT_NEXT';
export const INPUT_CATEGORY = 'INPUT_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const CHANGE_ADDRESS = 'CHANGE_ADDRESS';

export const inputCategory = (categoryString) => {
  return {
    type: INPUT_CATEGORY,
    categoryString
  }
}

export const addCategory = (categoryString) => {
  return {
    type: ADD_CATEGORY,
    categoryString
  }
}

export const handleClickCategoryChip = (category) => {
  return {
    type: HANDLE_CLICK_CATEGORY_CHIP,
    category
  };
};

export const requestRecommendations = () => {
  return {
    type: REQUEST_RECOMMENDATIONS
  };
};


export const receiveRecommendations = (availableOptions, currentRestaurant) => {
  return {
    type: RECEIVE_RECOMMENDATIONS,
    availableOptions,
    currentRestaurant
  };
};

export const handleGetRecommendations = () => {
  console.log('got called!');
  return (dispatch, getState) => {
    console.log('got call here too', getState());
    const currentState = getState();
    if (currentState.recommend.numberSelected <= 0) {
      return;
    }
    
    const categoryString = currentState.recommend.categoryStates.filter(categoryState => {
      return categoryState.selected;
    }).map(categoryState => {
      return categoryState.categoryName;
    }).join('+'); 
    const lat = currentState.recommend.lat;
    const lng = currentState.recommend.lng;
    const queryString = `term=${categoryString}&latitude=${lat}&longitude=${lng}`;
    
    dispatch(requestRecommendations());
    return fetchRecommendations(queryString)
    .then(response => {
      console.log('res', response);
      let restaurants = response.data;
      const currentRestaurant = restaurants.pop();
      return dispatch(receiveRecommendations(restaurants, currentRestaurant));
    });
  }
}

const fetchRecommendations = (queryString) => {
  let endPoint = 'recommend/index?';
  let devURL = process.env.REACT_APP_SERVER_API_URL + endPoint + queryString;
  console.log('sending request', devURL);
  return axios.get(devURL);
}

export const handleYes = (restaurant) => {
  return {
    type: SELECT_YES,
    restaurant
  }
}

export const handleNext = (restaurant) => {
  return {
    type: SELECT_NEXT,
    restaurant
  }
}

export const changeAddress = ({formatted_address, geometry, name}) => {
  return {
    type: CHANGE_ADDRESS,
    formattedAddress: formatted_address,
    lat: geometry.location.lat(),
    lng: geometry.location.lng(),
    addressName: name
  }
}

export const handleDeleteCategory = (category) => {
  return {
    type: HANDLE_DELETE_CATEGORY,
    category
  }
}