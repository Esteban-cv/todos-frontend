import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import Layout from './components/layout/layout';

function App() {
    return (
        <div className="App">
            <Routes>
                {/* --- Rutas Públicas --- */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* --- Rutas Privadas (con Layout: Navbar + Header + Footer) --- */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
                    {/* <Route path="/tareas" element={<Layout><TuComponenteDeTareas /></Layout>} /> */}
                </Route>
                
                {/* (Ruta para 404) */}
                <Route path="*" element={<h2>404: Página no encontrada</h2>} />
            </Routes>
        </div>
    );
}

export default App;