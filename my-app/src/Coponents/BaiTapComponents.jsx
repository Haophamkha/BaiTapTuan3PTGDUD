import React, { useState } from "react";
import anh2 from "../img/anh2.jpg";
import Button from "./ButtonComponents";
import ChamTron from "./ChamTron";
export default function BaiTapComponents() {
   
    return (
        <>
                <h1 color="#DF42A3">Discover Chefify</h1>
                <h3>Easy and delicious cooking instructions right here. Start exploring now! </h3>
                <img src={anh2} alt="" width="60%" height="400"/>
                <ChamTron isActive={1}></ChamTron>
                <Button children="Next"></Button>
                <Button color="#DF42A3" backgroundColor="white" children="Skip"></Button>

        </>
    );
}
