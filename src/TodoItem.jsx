import React from "react";

export default function TodoItem({ data }) {

    function del (){
        this.parent.remove();
    }
    
    return (
      <>
        <div className={data}>
          <input type="checkbox" />
          <p>{data}</p>
          <button id={data}>
            Delete
          </button>
        </div>
      </>
    );
}