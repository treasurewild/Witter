import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="container-fluid">
                <Header />

                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
                <Footer />

            </div>
        </>
    );
}

export default App;
