import React from 'react'
import Create from './Create'
import TodoItem from './TodoItem'
import axios from 'axios'
import { useEffect } from 'react'

function Home() {
   
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    useEffect( () => {
         axios.get(`http://localhost:3000/getTodos`)
         .then((response) => {
            setTodos(response.data);
        }).catch((error) => {
            console.error('Error fetching todos:', error);
        });
    }, [loading])
    return (
        <div className='home'>
            <h2 className='title-todo'> Todo List</h2>
            <Create todos={todos} setTodos={setTodos} loading={loading} setLoading={setLoading}/>
            {
                todos.length === 0 ? <h3 className='no-todo'> No Todos</h3> : 
                todos.map((todo, index) => {
                    return <TodoItem key={index} todo={todo} index={index} setTodos={setTodos} todos = {todos} loading={loading} setLoading={setLoading}/>
                })
            }
        </div>
    )
}

export default Home