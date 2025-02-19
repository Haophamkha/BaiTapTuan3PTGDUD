import React, { useState } from "react";

export default function BaiTap1() {
    const [a, setA] = useState(0); 
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    const [op, setOp] = useState("");
    function handleInputA(e) {
        setA(e.target.value); 
    }
    function handleInputB(e) {
        setB(e.target.value); 
    }

    function handleClick() {
        if(op === "+") setResult(parseInt(a) + parseInt(b));
       else if(op === "-") setResult(parseInt(a) - parseInt(b));
       else if(op === "*") setResult(parseInt(a) * parseInt(b));
       else if(op === "/") setResult(parseInt(a) / parseInt(b));
    }
    function handlechoice(e) {
        setOp(e.target.value);
    }

    return (
        <>
            <input placeholder="a=" onChange={handleInputA} type="text" />
            <br />
            <input placeholder="b=" onChange={handleInputB} type="text" />
            <br />
            <input onChange={handlechoice} type="radio" name="gr" value="+"/>
            <label>+</label>
            <input onChange={handlechoice} type="radio" name="gr" value="-"/>
            <label>-</label>
            <input onChange={handlechoice} type="radio" name="gr" value="*"/>
            <label>*</label>
            <input onChange={handlechoice} type="radio" name="gr" value="/"/>
            <label>/</label>
            <br />

            <button onClick={handleClick}>Tính</button>
            <br />
            <span>{result}</span> 
            <br />
        </>
    );
}
