import Footer from './Components/Footer';
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [user, setUser] = useState({});

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
                <Route path="/" element={<HomePage user={user} setUser={setUser} wits={wits} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />

        </div>

    );
}

export default App;
