import React, { useState } from "react";
import TodoList from "./TodoList";

export default function Addtodo() {

    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState('');


    function handelclick() {
        if (value) {
            setTodo(prev => [...prev, value])
            setValue('')
        }
    }
    

    return (
        <>
            <input type="text" name="add" id="add" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => handelclick()}>Add ToDo</button>
            {todo.length === 0
                ? <h2>Add a To Do</h2>
                : <TodoList data={todo} />
            }
        </>
    )
};