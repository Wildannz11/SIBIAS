import Hero from "../components/Hero"
import {React, useState} from "react"
import TextField from "@mui/material/TextField";
import FilterSosialisasi from "../components/FilterSosialisasi"
import "./css/Diskusi.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#53D1B6',
      darker: '#09bef0',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function Sosialisasi(){
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="main container text-center">
                <h1>Sosialisasi Kebijakan</h1>
                <ThemeProvider theme={theme}>
                <div className="search">
                    <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    />
                </div>
                </ThemeProvider>
            </div>
                <FilterSosialisasi input={inputText} />
            <Footer/>
        </div>
  
    )
}

export default Sosialisasi;