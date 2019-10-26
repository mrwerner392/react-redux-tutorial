// handle actions that affect the todos that are displayed
  // (i.e. setting visibility filter)
// set default state value to 'SHOW_ALL' (value of VisibilityFilters.SHOW_ALL)
// state here will only by the visibilityFilter key of state
// return state in default case of switch statement

import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  };
}

export default visibilityFilter;
