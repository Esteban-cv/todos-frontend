import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/layout/Navbar';

// Creamos un "Dashboard" simple por ahora
function Dashboard() {
    const { logout } = useAuth();
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-body text-center p-5">
                            <h1 className="display-4 mb-4">¡Bienvenido! 🎉</h1>
                            <p className="lead mb-4">Estás logueado exitosamente</p>
                            <button onClick={logout} className="btn btn-danger">
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            
            
            <Routes>
                {/* --- Rutas Públicas --- */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* --- Rutas Privadas --- */}
                <Route element={<ProtectedRoute />}>
                    {/* Todo lo que esté aquí adentro, estará protegido */}
                    <Route path="/dashboard" element={<Navbar />} />
                    {/* <Route path="/tareas" element={<TuComponenteDeTareas />} /> */}
                </Route>
                
                {/* (Ruta para 404) */}
                <Route path="*" element={<h2>404: Página no encontrada</h2>} />
            </Routes>
        </div>
    );
}

export default App;