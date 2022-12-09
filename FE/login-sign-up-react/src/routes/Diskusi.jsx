import Hero from "../components/Hero"
import {React, useState, useEffect} from "react"
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterDiskusi from "../components/FilterDiskusi"
import "./css/Diskusi.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from "axios";
import CONFIG from '../utils/Config';

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
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const baseUrl = CONFIG.BASE_URL;
    
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`${baseUrl}/diskusii?judul_diskusi=${query}`);
        setData(res.data);
      };
      if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

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
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    />
                </div>
                </ThemeProvider>
            </div>
            <div className="container">
                <FilterDiskusi data={data} />
            </div>
            <Footer/>
        </div>
  
    )
}

export default Diskusi;