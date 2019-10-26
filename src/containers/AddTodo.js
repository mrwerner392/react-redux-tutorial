import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


// it seems that 'stuff', as I am calling it for testing, is just an object
// with one key called dispatch that points to redux's dispatch function.
// Upon further research dispatch gets passed in by connect if we call connect()
// with no arguments
let AddTodo = (stuff) => {
  console.log(stuff);
  let input;

  return (
    < div >
      < form onSubmit={ evt => {
          evt.preventDefault();
          if (!input.value.trim()) {
            return
          }
          stuff.dispatch(addTodo(input.value))
          input.value='';
        }}
      >
        < input ref={ node => {
            input = node
          }}
        />
        < button type='submit'>Add Todo< /button >
      < /form >
    < /div >
  )
}

AddTodo = connect()(AddTodo);
export default AddTodo
