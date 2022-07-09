import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const {title,desc}=props.todo;

    const handleRemove=(id)=>{
        props.onRemove(id);
    }
    return (
        <div className='container'>
            <div className='todo'>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <button 
                onClick={()=>{handleRemove(props.id)}}>
                    <FontAwesomeIcon icon={faTrashCan}
                    style={{color:'red'}} />
                </button>
            </div>
        </div>
    );
};

export default Todo;