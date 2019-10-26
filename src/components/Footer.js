import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions'

// just renders the different links that allow a user to click and filter todos
// filter prop is used to determine if it is the active link or not

// instead of rendering three Link components, we render three FilterLinks
// this seems to allow us to separate concerns, as FilterLink handles all
// interactions with the store and Link just renders something on the DOM
const Footer = () => (
  < p >
    Show: < FilterLink filter={ VisibilityFilters.SHOW_ALL } >All< /FilterLink >
    {', '} < FilterLink filter={ VisibilityFilters.SHOW_ACTIVE } >Active< /FilterLink >
    {', '} < FilterLink filter={ VisibilityFilters.SHOW_COMPLETED } >Completed< /FilterLink >
  < /p >
)

export default Footer;
