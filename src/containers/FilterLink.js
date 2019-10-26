import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link';

// ownProps are props passed from parent, not from mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
}


// This FilterLink file is solely responsible for handling the interactions
// with the store and state. we are not defining a new component here, but we export
// a Link component that has been connected to the store
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
