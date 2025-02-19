import React, { useState } from "react";

export default function BaiTap1() {
    const [list, setList] = useState([]); 
    const [task, setTask] = useState("");
    const deleteTask = (index) => {
        setList(list.filter((item, index) => index !== index));
    }
    function handleInput(e) {
        setTask(e.target.value); 
    }
    function handleClick() {
        setList([...list, task]);
    }
    
    

    return (
        <>
            <input onChange={handleInput} type="text" />
            <br />
            <button onClick={handleClick}>Thêm</button>
            <br />
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}
                        <button onClick={deleteTask}>xóa</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
