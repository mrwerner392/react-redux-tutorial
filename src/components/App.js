import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    < div className="App" >

      // render the container components (imported above)
      < AddTodo />
      < VisibleTodoList />
      < Footer />
    < /div >
  );
}

export default App;
