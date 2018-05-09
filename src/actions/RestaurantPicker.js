export const SELECT_YES = 'SELECT_YES';
export const SELECT_NEXT = 'SELECT_NEXT';

export const selectYes = (restaurant) => {
  return {
    type: SELECT_YES,
    payload: {
      restaurant
    }
  }
}

export const selectNext = (restaurant) => {
  return {
    type: SELECT_NEXT,
    payload: {
      restaurant
    }
  }
}