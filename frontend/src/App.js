import Footer from './Components/Page/Footer.jsx';
import Header from './Components/Page/Header.jsx';
import { useState, useEffect } from 'react';
import { getWits, postWit, postReply, deleteWit } from '../src/async/witAPIcalls.js';
import createId from './utils/createId.js';
import User from './Components/User/User.jsx';
import AllWits from './Components/Wits/AllWits.jsx';

function App() {

    const [wits, setWits] = useState([]);
    const [user, setUser] = useState({});
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

    const addWit = async (wit) => {
        const currentDate = new Date();
        const newWit = { _id: createId(), text: wit, dateCreated: currentDate, postedBy: user, original: true }
        const res = await postWit(newWit);

        if (res.status === 200) {
            alert(res.message);
            getWitsHandler();
            return;
        }

        alert(res.message);
    }

    const addReply = async (reply, witId) => {
        const currentDate = new Date();
        const newReply = { _id: createId(), text: reply, dateCreated: currentDate, postedBy: user, original: false }
        const res = await postReply({ reply: newReply, witId: witId });

        if (res.status === 200) {
            alert(res.message);
            getWitsHandler();
            return;
        }

        alert(res.message);
    }

    const handleDelete = async (witId) => {
        const res = await deleteWit(witId);
        getWitsHandler();
        alert(res.message)
    }

    useEffect(() => {
        getWitsHandler();
    }, []);

    return (

        <div className='d-flex flex-column'>
            <Header />
            <div className='main'>
                <User user={user} setUser={setUser} addWit={addWit} />
                <AllWits data={{ wits, error: error.message }} user={user} addReply={addReply} handleDelete={handleDelete} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
