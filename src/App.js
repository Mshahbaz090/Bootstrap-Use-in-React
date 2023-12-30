import React from "react";
import "./App.css"
import Navbar from "./comp/navbar"

function App() {

    let name = "1"

    function abc() {
        let name6 = "ali"
        alert(name6);
    }

    return (
        <div>
            <Navbar />
            <h1 className="ab">hi shahbaz</h1>
            <h1>{name + 4 * 2 / 5}</h1>
            <p>hi ahmed how are you</p>
            <input type="text" placeholder="enter your name"></input>
            <button onClick={abc}>Nexskill</button>


            {/* boosttrap */}




        </div>





    )
}


export default App