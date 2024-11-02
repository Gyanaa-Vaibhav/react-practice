import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ data }) {
    console.log("from Todo", data)
    
    const ans = data.map(x => <TodoItem key={x} data={ x } />)

    return (
        <>
            {ans}
        </>
    )
}