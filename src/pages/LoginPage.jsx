// src/pages/LoginPage.jsx

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        const success = await login(email, password);

        if (success) {
            navigate('/dashboard');
        } else {
            setError('Email o contraseña incorrectos.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input 
                                        type="text"
                                        id="email"
                                        className="form-control"
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="tucorreo@ejemplo.com"
                                        required 
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña:</label>
                                    <input 
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Tu contraseña"
                                        required 
                                    />
                                </div>
                                
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                
                                <button type="submit" className="btn btn-primary w-100 mb-3">
                                    Entrar
                                </button>
                            </form>
                            
                            <p className="text-center mb-0">
                                ¿No tienes cuenta? <Link to="/register" className="text-decoration-none">Regístrate</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;