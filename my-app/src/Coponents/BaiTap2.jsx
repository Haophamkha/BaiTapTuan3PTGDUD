import React, { useState } from "react";

export default function BaiTap1() {
    const [a, setA] = useState(0); 
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    function handleInputA(e) {
        setA(e.target.value); 
    }
    function handleInputB(e) {
        setB(e.target.value); 
    }

    function handleClick() {
        
        setResult(parseInt(a) + parseInt(b));
    }

    return (
        <>
            <input placeholder="a=" onChange={handleInputA} type="text" />
            <br />
            <input placeholder="b=" onChange={handleInputB} type="text" />
            <br />
            <button onClick={handleClick}>Tính</button>
            <br />
            <span>{result}</span> 
            <br />
        </>
    );
}
