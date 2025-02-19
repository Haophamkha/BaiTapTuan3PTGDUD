import React, { useState } from "react";

export default function BaiTap1() {
    
    const [content, setContent] = useState("");
    var a =
    {
        A : "A",
        B : "B",
        C : "C",
        D : "D"
    }
    function handleClickA() {
        setContent(a.A);
    }
    function handleClickB() {
        setContent(a.B);
    }
    function handleClickC() {
        setContent(a.C);
    }
    function handleClickD() {
        setContent(a.D);
    }
    return (
        <>
                <button onClick={handleClickA}>A</button>
                <button onClick={handleClickB}>B</button>
                <button onClick={handleClickC}>C</button>
                <button onClick={handleClickD}>D</button>
                <br />
                <span>{content}</span>
                <br />
        </>
    );
}
