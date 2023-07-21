import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css';

const api = axios.create({
    baseURL: 'http://localhost:3001/api', // Replace with your backend server URL
});


function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await api.get('/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async (title) => {
        try {
            const newTodo = { title, completed: false };
            const response = await api.post('/todos', newTodo);
            setTodos([...todos, response.data]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <div className='todo'>
            <h1>Todo App</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.elements.title.value;
                    addTodo(title);
                    e.target.reset();
                }}
            >
                <input type="text" name="title" placeholder="Todo title" required />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
