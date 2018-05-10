export const HIGHLIGHT_CATEGORY = 'HIGHLIGHT_CATEGORY';
export const UNHIGHLIGHT_CATEGORY = 'UNHIGHLIGHT_CATEGORY';

export const SHOW_CATEGORY_PICKER = 'SHOW_CATEGORY_PICKER';
export const SHOW_RESTAURANT_PICKER = 'SHOW_RESTAURANT_PICKER';

export const highlightCategory = (categoryIndex) => {
  return {
    type: HIGHLIGHT_CATEGORY,
    payload: {
      categoryIndex
    }
  }
}