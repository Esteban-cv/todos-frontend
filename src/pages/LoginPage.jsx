import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import '../css/custom.css';

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
        <div className="container-fluid login-container">
            <div className="row justify-content-center w-100">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg login-card">
                        <div className="card-body p-5">
                            {/* Logo */}
                            <div className="text-center mb-4">
                                <img 
                                    src={logo} 
                                    alt="HacerList Logo" 
                                    className="login-logo"
                                />
                            </div>
                            
                            <h2 className="text-center mb-4 login-title">
                                Iniciar Sesión
                            </h2>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email:</label>
                                    <input 
                                        type="text"
                                        id="email"
                                        className="form-control form-control-lg login-input"
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="tucorreo@ejemplo.com"
                                        required 
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label fw-semibold">Contraseña:</label>
                                    <input 
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg login-input"
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Tu contraseña"
                                        required 
                                    />
                                </div>
                                
                                {error && (
                                    <div className="alert alert-danger login-alert" role="alert">
                                        {error}
                                    </div>
                                )}
                                
                                <button 
                                    type="submit" 
                                    className="btn w-100 mb-3 login-btn"
                                >
                                    Entrar
                                </button>
                            </form>
                            
                            <p className="text-center mb-0">
                                ¿No tienes cuenta? <Link to="/register" className="login-link">Regístrate</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;