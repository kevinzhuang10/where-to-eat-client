export const SELECT_YES = 'SELECT_YES';
export const SELECT_NEXT = 'SELECT_NEXT';
export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS';

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

export const receiveRecommendations = (availableOptions, currentRestaurant) => {
  return {
    type: RECEIVE_RECOMMENDATIONS,
    availableOptions,
    currentRestaurant
  };
};