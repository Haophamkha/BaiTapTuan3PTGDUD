import React, { useState } from "react";

export default function BaiTap1() {
    const [name, setName] = useState(""); 
    const [label, setLabel] = useState("");
    function handleInput(e) {
        setName(e.target.value); 
    }

    function handleClick() {
        
        setLabel(name);
    }

    return (
        <>
            <input onChange={handleInput} type="text" />
            <br />
            <button onClick={handleClick}>Nhập</button>
            <br />
            <span>{label}</span> 
            <br />
        </>
    );
}
