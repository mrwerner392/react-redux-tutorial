import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    < div className="App" >
      < AddTodo />
      < VisibleTodoList />
      < Footer />
    < /div >
  );
}

export default App;
