// src/pages/RegisterPage.jsx

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        const success = await register(name, lastName, email, password);

        if (success) {
            navigate('/dashboard');
        } else {
            setError('Error al registrarse. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center mb-4">Crear Cuenta</h2>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre:</label>
                                    <input 
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Tu nombre"
                                        required 
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Apellido:</label>
                                    <input 
                                        type="text"
                                        id="lastName"
                                        className="form-control"
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Tu apellido"
                                        required 
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input 
                                        type="email"
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
                                        placeholder="Crea una contraseña segura"
                                        required 
                                    />
                                </div>
                                
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                
                                <button type="submit" className="btn btn-success w-100 mb-3">
                                    Registrarse
                                </button>
                            </form>
                            
                            <p className="text-center mb-0">
                                ¿Ya tienes cuenta? <Link to="/" className="text-decoration-none">Inicia Sesión</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
