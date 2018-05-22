export const SELECT_YES = 'SELECT_YES';
export const SELECT_NEXT = 'SELECT_NEXT';

export const handleYes = (restaurant) => {
  return {
    type: SELECT_YES,
    payload: {
      restaurant
    }
  }
}

export const handleNext = (restaurant) => {
  return {
    type: SELECT_NEXT,
    payload: {
      restaurant
    }
  }
}