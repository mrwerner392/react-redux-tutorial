import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// use redux's combineReducer to combine our todos and
// visibilityFilter reducers and export the result for use in createStore

// our app's state which is managed by the store will have two keys:
// todos and visibilityFilters. these match the names of the reducers
// that handle each respective part of state

// combineReducers will call each reducer when an action is dipatched and pass
// the previous value for that key in state (i.e state.todos for todos reducer) and
// the action to each reducer, then combine the results into new state
  // if not using combineReducers, would look something like
    // todos: todos(state.todos, action),
    // visibilityFilter: visibilityFilter(state.visibilityFilter, action)

// both reducers always get called no matter the type of action dispatched

export default combineReducers({
  todos,
  visibilityFilter
});
