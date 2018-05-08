export const SELECT_YES = 'SELECT_YES';
export const SELECT_NEXT = 'SELECT_NEXT';

const selectYes = (restaurant) => {
  return {
    type: SELECT_YES,
    payload: {
      restaurant
    }
  }
}

const selectNext = (restaurant) => {
  return {
    type: SELECT_NEXT,
    payload: {
      restaurant
    }
  }
}