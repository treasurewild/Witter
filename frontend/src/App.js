import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import HomePage from './Components/HomePage.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getWits } from './Components/async/witAPIcalls.js';

function App() {

    const [user, setUser] = useState({});

    const [wits, setWits] = useState([]);

    const [error, setError] = useState({ type: ``, message: `` });

    const getWitsHandler = async () => {
        const getWitsResult = await getWits();

        if (getWitsResult?.error) {
            const errorObject = { ...getWitsResult.error };
            errorObject.message = `There was a problem getting the wits: ${getWitsResult.error.message}`;
            setError(errorObject);
        }

        const wits = getWitsResult?.wits ? getWitsResult.wits : [];
        setWits(wits);
    }

    useEffect(() => {
        getWitsHandler();
    }, []);

    return (

        <div className="container-fluid">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage user={user} setUser={setUser} data={{ wits, error: error.message }} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />

        </div>

    );
}

export default App;
