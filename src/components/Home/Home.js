import React from 'react';
import { useState } from 'react';

import {v4 as uuidv4} from 'uuid';

import NewTodo from '../newTodo/NewTodo';
import Todo from '../Todo/Todo';
import './Home.css'

const Home = () => {
    const [newTodo,setNewTodo]=useState([])

    const handleNewTodo=newTodos=>{
        setNewTodo([...newTodo,{id:uuidv4(),newTodos}])
        
    }
    const handleRemove=id=>{
        setNewTodo(newTodo.filter(filterdTodo=>filterdTodo.id !=id))
    }
    
    return (
        <div className='todos'>
            <h1 style={{color:'white',marginBottom:'10px'}}>Todo App</h1>
            <NewTodo onNewTodo={handleNewTodo}></NewTodo>
            {
                newTodo.map(todo=><Todo 
                    key={todo.id}
                    id={todo.id}
                     todo={todo.newTodos}
                     onRemove={handleRemove}
                     ></Todo>)
            }
           
        </div>
    );
};

export default Home;