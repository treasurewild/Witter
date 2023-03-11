import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [wits, setWits] = useState([]);
    const [error, setError] = useState({ type: "", message: "" });

    // useEffect(() => {
    //     fetch(process.env.REACT_APP_WITS_URL)
    //         .then(response => response.json())
    //         .then(data => setWits(data.wits))
    //         .catch(error => { console.log(error.message); });
    // }, []);

    const getWitsHandler = async () => {
        const extDataCallResult = await getWits(); // Could be extracted

        if (extDataCallResult?.error) {
            const errorObject = { ...extDataCallResult.error };
            errorObject.message = `There was a problem getting the todos: ${extDataCallResult.error.message}`;
            setError(errorObject);
        }

        const wits = extDataCallResult?.wits ? extDataCallResult.wits : [];

        setWits(wits);
    }

    const getWits = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_WITS_URL);
            if (Array.isArray(res.data) && res.data?.length > 0) return { wits: res.data, status: res.status };
            throw new Error(`There are no wits to retrieve, please add one`);
        } catch (e) {
            return {
                wits: [],
                status: e.response?.status ?? 204,
                error: {
                    type: `get`,
                    message: `Data not available from the server: ${e.message ?? e.response.message}`
                }
            }
        }
    }

    useEffect(() => {
        getWitsHandler();
    }, []);

    return (
        <>
            <div className="container-fluid">
                <Header />

                <Routes>
                    <Route exact path="/" element={<HomePage data={{ wits }} />} />
                </Routes>
                <Footer />

            </div>
        </>
    );
}

export default App;
