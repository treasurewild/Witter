import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import { useState, useEffect } from 'react';
import { getWits } from './Components/async/witAPIcalls.js';
import User from './Components/User.jsx';
import AllWits from './Components/AllWits.jsx';

function App() {

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

        < >
            <Header />
            <div className='main'>
                <User />
                <AllWits data={{ wits, error: error.message }} />
            </div>
            <Footer />
        </>
    );
}

export default App;
