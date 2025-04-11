import React from 'react'
import axios from 'axios'

function TodoItem({ todo, index, loading, setLoading }) {
    const onComplete = (id) => {
        axios.patch(`${import.meta.env.VITE_API_URL}/completeTodo/${id}`, { completed: todo.completed })

        .then((response) => {
            console.log(response.data);
            setLoading(!loading)
        })
        .catch((error) => {
            console.error('Error completing todo:', error);
        });
    }
    const onDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_API_URL}/deleteTodo/${id}`)
        .then((response) => {
            console.log(response.data);
            setLoading(!loading)
        })
        .catch((error) => {
            console.error('Error deleting todo:', error);
        });
    }
  return (
    <>
      <div className='todo-item' id={index}>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
        <button onClick={() => onComplete(todo._id)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </>
  )
}

export default TodoItem