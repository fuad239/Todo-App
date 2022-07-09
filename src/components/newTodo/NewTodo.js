import React from 'react';
import { useState } from 'react';
import './NewTodo.css'
const NewTodo = (props) => {
    const [todo,setTodo]=useState({title:'',desc:''});

    const handleChange=e=>{
        setTodo({...todo,[e.target.name]:e.target.value});
    }
    
    const handleSubmit=e=>{
        props.onNewTodo(todo);
        setTodo({title:'',desc:''});
        e.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='label'>
                    <label htmlFor="title" >Title: </label>
                    <input type="text" onChange={handleChange} name='title' className='inputField' value={todo.title} id='title'/>
                </div>
                <div className='label'>
                    <label htmlFor="desc" >Description : </label>
                    <input type="text" onChange={handleChange} name='desc' className='inputField' value={todo.desc} id='desc'/>
                </div>
                <div>
                    <button type='submit'>Add Todo </button>
                </div>
            </form>
        </div>
    );
};

export default NewTodo;