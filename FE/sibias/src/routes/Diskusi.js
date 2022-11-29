import Hero from "./../components/Hero"
import {React, useState} from "react"
import TextField from "@mui/material/TextField";
import List from "./../components/List"
import "./css/Diskusi.css";

function Diskusi(){
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div>
            <Hero />
            <div className="main">
                <h1>React Search</h1>
                <div className="search">
                    <button>Test</button>
                    <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    />
                </div>
                <List input={inputText} />
            </div>
        </div>
    )
}

export default Diskusi;