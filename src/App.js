import React, { useState } from 'react';





const App = () => {
    const [num, setnum] = useState(0)
    const inc=()=>{
        setnum(num + 1)
    }
    const dec=()=>{
    if(num > 0) {
        setnum(num - 1)
    }else{
       setnum(0)
       alert("Reached to the limit")
    }}
    return (
        <div className="main_div">
            <div className="center_div">
                <h1> {num} </h1>
                <div className="btn-div">
                    <button onClick={inc}> Increm </button>
                    <button onClick={dec}> Decrem </button> </div> </div> </div>
    )

}
export default App;