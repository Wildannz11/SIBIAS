import Hero from "../components/Hero"
import {React, useState} from "react"
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterDiskusi from "../components/FilterDiskusi"
import "./css/Diskusi.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
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

function Diskusi(){
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="main container text-center">
                <h1>Diskusi Kebijakan</h1>
                <ThemeProvider theme={theme}>
                    <Link to="/tambah_diskusi" className="Link">
                    <Button variant="contained" className="mb-2" startIcon={<AddCircleIcon />}>
                        Buat Diskusi Baru
                    </Button>
                    </Link>
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
                <FilterDiskusi input={inputText} />
            <Footer/>
        </div>
  
    )
}

export default Diskusi;