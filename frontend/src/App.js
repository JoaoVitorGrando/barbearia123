import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AgendamentosProvider } from './context/AgendamentosContext'; // Importa o provedor
import Agendamentos from './pages/Agendamentos';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    return (
        <AgendamentosProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/agendamentos" element={<Agendamentos />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AgendamentosProvider>
    );
};

export default App;
