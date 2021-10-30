import React from "react";
import { useState } from "react";
import '../App.css';

const State  = () =>{

    let [num , changeNum] = useState(2)
    let [color , changeColor] = useState("Black")
    let [arr , changeArr] = useState([1,2,3])
    
    return(
        <>
        <h2>{num}</h2>
        <button onClick={()=>changeNum(++num)}>click me</button>

        <h1>My favourite color is {color} !</h1>
        <button onClick={()=>changeColor("pink")}>pink</button>
        <button onClick={()=>changeColor("blue")}>blue</button>
        <button onClick={()=>changeColor("red")}>red</button>

        <h2>{arr}</h2>
        <button onClick={()=>changeArr(arr +  [4,5,6])}>click me</button>

        </>
    )
}
export default State;