import { useEffect } from 'react';
import { useState } from 'react';

export default function Todo() {
    const [todoDetails, setTodoDetails] = useState({
        id: 0, name: '', description: ''
    })
    const [todos, setTodos] = useState([])
    const [renderCount, setRenderCount] = useState(0)

    const handleInputChange = (event) => {
        setTodoDetails((prevDetails) => ({
            ...prevDetails,
            [event.target.name]: event.target.value
        }))
    }

    const clearForm = () => {
        setTodoDetails({
            name: '', description: '', id: 0
        })
    }

    const submitForm = (event) => {
        event.preventDefault()

        if (!todoDetails.id) {
            setTodos((prevDetails) => [
                ...prevDetails,
                {
                    name: todoDetails.name,
                    description: todoDetails.description,
                    id: todos.length + 1
                }
            ])
        } else {
            setTodos((prevDetails) =>
                prevDetails.map((item) => item.id === todoDetails.id ?
                    { ...item, name: todoDetails.name, description: todoDetails.description } : item
                )
            )
        }
        
        clearForm()

    }

    useEffect(() => {
       setRenderCount((prevCount) => prevCount + 1);
    }, [todoDetails])

    const deleteTodo = (details) => {
        setTodos((prevDetails) =>
            prevDetails.filter((item) => item.id !== details.id )
        )
    }

    const viewTodo = (details) => {
        setTodoDetails({
            name: details.name,
            description: details.description,
            id: details.id
        })
    }
    return (
        <>
            <div style={{ border: '1px solid black' }}>
                <h2>Approach 1</h2>
                <div>Render Count: {renderCount}</div>
                <div style={{ margin: '5px' }}>
                    <form onSubmit={submitForm }>
                        <input
                            type='text'
                            placeholder='Enter name'
                            name='name'
                            value={todoDetails.name}
                            onChange={handleInputChange}
                        />
                        <br />
                        <input
                            type='text'
                            placeholder='Enter description'
                            name='description'
                            value={todoDetails.description}
                            onChange={handleInputChange}
                        />
                        <br />
                        <input type='submit' />

                    </form>

                    {todos.length > 0 ? (
                        <ul>
                            {todos.map((item) => (
                                <li key={item.id}>
                                    Name:{item.name} |
                                    Description: {item.description} | &nbsp;
                                    <button onClick={() => viewTodo(item)}>Edit</button> &nbsp;
                                    <button onClick={() => deleteTodo(item)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    ) :
                        'No todos found'
                    }
                </div>
               
            </div>
            
        </>
    )
}