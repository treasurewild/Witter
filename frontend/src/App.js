import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/Register';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [wits, setWits] = useState([]);

    const getWits = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_WITS_URL);
            setWits(res.data);
        } catch (e) {
            return {
                wits: [],
                status: e.response?.status ?? 204
            }
        }
    }

    useEffect(() => {
        getWits();
    }, []);

    return (

        <div className="container-fluid">
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage wits={wits} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />

        </div>

    );
}

export default App;
