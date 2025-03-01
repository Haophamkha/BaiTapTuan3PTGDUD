import React, { useState } from "react";
import anh1 from "../img/anh1.png";
import Button from "./ButtonComponents";
export default function BaiTapComponents() {
   
    return (
        <>
                <h1>Login</h1>
                <h3>Enter your email to log in. </h3>
                <img src={anh1} alt="" width="60%" height="400" className="block mx-0"/>
                <Button color="#DF42A3" backgroundColor="white" children="Skip"></Button>
                <Button children="Continue"></Button>
                <h3>By continuing you agree to the updated <span className="font-bold">Terms of Sale. Terms of Service</span>, and <span className="font-bold">Privacy Policy</span>. </h3>
                <Button color="red" backgroundColor="#ADC5E3" children="Continue with Google"></Button>
                <Button color="blue" backgroundColor="#ADC5E3" children="Continue with Facebook"></Button>
                <Button color="black" backgroundColor="#ADC5E3" children="Continue with Apple"></Button>

                
                
                <h3>"Embrace the art of cooking, where flavors come alive!" </h3>
                
        </>
    );
}
