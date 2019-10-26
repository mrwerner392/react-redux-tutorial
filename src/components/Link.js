import React from 'react';
import PropTypes from 'prop-types';

// children is what is inside the FilterLink that is being rendered in Footer.js
const Link = (stuff/*{ active, children, onClick }*/) => {
  console.log(stuff);
  if (stuff.active) {
    return < span >{ stuff.children }< /span >
  }

  return (
    < a href=''
        onClick={evt => {
          evt.preventDefault();
          stuff.onClick();
        }}
    >
      { stuff.children }
    < /a >
  );
}

// will produce a warning if prop types don't match
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
