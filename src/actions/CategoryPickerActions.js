export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const DESELECT_CATEGORY = 'DESELECT_CATEGORY';

const selectCategory = (category) => {
  return {
    type: SELECT_CATEGORY,
    payload: {
      category
    }
  }
}

const deselectCategory = (category) => {
  return {
    type: DESELECT_CATEGORY,
    payload: {
      category
    }
  }
}