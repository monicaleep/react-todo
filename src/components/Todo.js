import React from 'react';


const Todo = ({text, complete, toggleComplete, deleteTodo }) => {
  return (
    <div style={{display:'flex', justifyContent:'center',margin:5}}>
      <div style={{textDecoration: complete? 'line-through':'none'}} onClick={toggleComplete}>
      {text}
      </div>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}



export default Todo;
