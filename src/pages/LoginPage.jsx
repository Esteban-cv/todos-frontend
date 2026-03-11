import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import { BiEnvelope, BiLock, BiLogIn, BiCheckCircle, BiCalendarCheck, BiBell } from 'react-icons/bi';

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
        <div className="container-fluid p-0" style={{ height: '100vh', overflow: 'hidden' }}>
            <div className="row g-0 h-100">

                {/* === Panel izquierdo: Branding === */}
                <div
                    className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white px-4 py-3"
                    style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #6366F1 100%)' }}
                >
                    <div className="text-center" style={{ maxWidth: '380px' }}>
                        <img
                            src={logo}
                            alt="HacerList"
                            className="img-fluid mb-3 rounded-4"
                            style={{ width: '140px', height: '85px', objectFit: 'contain' }}
                        />
                        <h2 className="fw-bold mb-2">Organiza tu día,</h2>
                        <h2 className="fw-bold mb-3">conquista tus metas.</h2>
                        <p className="opacity-75 mb-4 small">
                            La forma más simple e inteligente de gestionar tus tareas diarias.
                        </p>
                        <div className="d-flex flex-column gap-2 text-start mx-auto" style={{ maxWidth: '280px' }}>
                            <div className="d-flex align-items-center gap-2">
                                <BiCheckCircle size={20} className="opacity-75 flex-shrink-0" />
                                <span className="opacity-90 small">Crea y organiza tareas fácilmente</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <BiCalendarCheck size={20} className="opacity-75 flex-shrink-0" />
                                <span className="opacity-90 small">Seguimiento de progreso diario</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <BiBell size={20} className="opacity-75 flex-shrink-0" />
                                <span className="opacity-90 small">Recordatorios inteligentes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === Panel derecho: Formulario === */}
                <div
                    className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-3 p-md-4"
                    style={{ backgroundColor: '#F8FAFC' }}
                >
                    {/* Logo solo visible en móvil */}
                    <div className="d-lg-none text-center mb-3">
                        <img
                            src={logo}
                            alt="HacerList"
                            className="img-fluid rounded-4"
                            style={{ width: '100px', height: '60px', objectFit: 'contain' }}
                        />
                    </div>

                    <div className="w-100" style={{ maxWidth: '380px' }}>
                        <h4 className="fw-bold mb-1" style={{ color: 'var(--hl-text)' }}>Bienvenido de vuelta</h4>
                        <p className="mb-3 small" style={{ color: 'var(--hl-muted)' }}>
                            Ingresa tus credenciales para continuar
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label fw-medium small text-uppercase mb-1" style={{ color: 'var(--hl-muted)', letterSpacing: '0.05em', fontSize: '0.7rem' }}>
                                    Email
                                </label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text bg-white border-end-0" style={{ borderColor: 'var(--hl-border)' }}>
                                        <BiEnvelope className="text-muted" />
                                    </span>
                                    <input
                                        type="text"
                                        id="email"
                                        className="form-control border-start-0 ps-0"
                                        style={{ borderColor: 'var(--hl-border)' }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="tucorreo@ejemplo.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-medium small text-uppercase mb-1" style={{ color: 'var(--hl-muted)', letterSpacing: '0.05em', fontSize: '0.7rem' }}>
                                    Contraseña
                                </label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text bg-white border-end-0" style={{ borderColor: 'var(--hl-border)' }}>
                                        <BiLock className="text-muted" />
                                    </span>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control border-start-0 ps-0"
                                        style={{ borderColor: 'var(--hl-border)' }}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {error && (
                                <div id='error-message' className="alert alert-danger d-flex align-items-center rounded-3 py-1 px-2 small mb-2" role="alert">
                                    {error}
                                </div>
                            )}

                            <button id='submit' type="submit" className="btn btn-hl w-100 py-2 mb-3">
                                <BiLogIn className="me-2" />
                                Iniciar Sesión
                            </button>
                        </form>

                        <p className="text-center mb-0 small" style={{ color: 'var(--hl-muted)' }}>
                            ¿No tienes cuenta?{' '}
                            <Link to="/register" className="fw-semibold text-decoration-none" style={{ color: 'var(--hl-primary)' }}>
                                Crear cuenta gratis
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;