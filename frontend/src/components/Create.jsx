import React from 'react'
import axios from 'axios'

function Create({loading, setLoading }) {
    const [text, setText] = React.useState('')
    

    const handleChangeInput = (e) => {
        setText(e.target.value)
    }

    const handleClickButton = async () => {
        if (text.trim() === '') return // Prevent adding empty todos
        console.log(text)
        await axios.post('http://localhost:3000/addTodo', {task : text})
        .then((response) => {
            console.log(response.data);
            setLoading(!loading)
        })
        .catch((error) => {
            console.error('Error adding todo:', error);
        });

        setText('') 

    }

    return (
        <div className="create-todo">
            <input 
                type="text" 
                value={text} 
                onChange={handleChangeInput} 
                placeholder="Enter a new todo" 
            />
            <button onClick={handleClickButton}>Add</button>
        </div>
    )
}

export default Create