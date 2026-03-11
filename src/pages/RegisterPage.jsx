import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import { BiUser, BiEnvelope, BiLock, BiUserPlus, BiCheckCircle, BiCalendarCheck, BiBell } from 'react-icons/bi';

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
        <div className="container-fluid min-vh-100 p-0">
            <div className="row g-0 min-vh-100">

                {/* === Panel izquierdo: Branding === */}
                <div
                    className="col-lg-5 d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5"
                    style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 50%, #6366F1 100%)' }}
                >
                    <div className="text-center" style={{ maxWidth: '380px' }}>
                        <img
                            src={logo}
                            alt="HacerList"
                            className="img-fluid mb-4 rounded-4"
                            style={{ width: '160px', height: '100px', objectFit: 'contain' }}
                        />
                        <h2 className="fw-bold mb-3">Empieza a ser más productivo hoy</h2>
                        <p className="opacity-75 mb-5">
                            Únete a miles de personas que ya organizan su vida con HacerList.
                        </p>
                        <div className="d-flex flex-column gap-3 text-start mx-auto" style={{ maxWidth: '300px' }}>
                            <div className="d-flex align-items-center gap-3">
                                <BiCheckCircle size={22} className="opacity-75 flex-shrink-0" />
                                <span className="opacity-90 small">Gratis para siempre</span>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <BiCalendarCheck size={22} className="opacity-75 flex-shrink-0" />
                                <span className="opacity-90 small">Planifica tu semana completa</span>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <BiBell size={22} className="opacity-75 flex-shrink-0" />
                                <span className="opacity-90 small">Nunca olvides una tarea</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === Panel derecho: Formulario === */}
                <div
                    className="col-lg-7 d-flex flex-column justify-content-center align-items-center p-4 p-md-5"
                    style={{ backgroundColor: '#F8FAFC' }}
                >
                    {/* Logo solo en móvil */}
                    <div className="d-lg-none text-center mb-3">
                        <img src={logo} alt="HacerList" className="img-fluid rounded-4"
                            style={{ width: '120px', height: '75px', objectFit: 'contain' }}
                        />
                    </div>

                    <div className="w-100" style={{ maxWidth: '480px' }}>
                        <h2 className="fw-bold mb-1" style={{ color: 'var(--hl-text)' }}>Crear tu cuenta</h2>
                        <p className="mb-4" style={{ color: 'var(--hl-muted)' }}>
                            Completa tus datos para empezar
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="name" className="form-label fw-medium small text-uppercase" style={{ color: 'var(--hl-muted)', letterSpacing: '0.05em' }}>
                                        Nombre
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white border-end-0" style={{ borderColor: 'var(--hl-border)' }}>
                                            <BiUser className="text-muted" />
                                        </span>
                                        <input type="text" id="name" className="form-control border-start-0 ps-0"
                                            style={{ borderColor: 'var(--hl-border)' }}
                                            value={name} onChange={(e) => setName(e.target.value)}
                                            placeholder="Tu nombre" required
                                        />
                                    </div>
                                </div>

                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="lastName" className="form-label fw-medium small text-uppercase" style={{ color: 'var(--hl-muted)', letterSpacing: '0.05em' }}>
                                        Apellido
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white border-end-0" style={{ borderColor: 'var(--hl-border)' }}>
                                            <BiUser className="text-muted" />
                                        </span>
                                        <input type="text" id="lastName" className="form-control border-start-0 ps-0"
                                            style={{ borderColor: 'var(--hl-border)' }}
                                            value={lastName} onChange={(e) => setLastName(e.target.value)}
                                            placeholder="Tu apellido" required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-medium small text-uppercase" style={{ color: 'var(--hl-muted)', letterSpacing: '0.05em' }}>
                                    Email
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0" style={{ borderColor: 'var(--hl-border)' }}>
                                        <BiEnvelope className="text-muted" />
                                    </span>
                                    <input type="email" id="email" className="form-control border-start-0 ps-0"
                                        style={{ borderColor: 'var(--hl-border)' }}
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="tucorreo@ejemplo.com" required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label fw-medium small text-uppercase" style={{ color: 'var(--hl-muted)', letterSpacing: '0.05em' }}>
                                    Contraseña
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0" style={{ borderColor: 'var(--hl-border)' }}>
                                        <BiLock className="text-muted" />
                                    </span>
                                    <input type="password" id="password" className="form-control border-start-0 ps-0"
                                        style={{ borderColor: 'var(--hl-border)' }}
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Mínimo 8 caracteres" required
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="alert alert-danger d-flex align-items-center rounded-3 py-2 small" role="alert">
                                    {error}
                                </div>
                            )}

                            <button type="submit" className="btn btn-hl btn-lg w-100 py-2 mb-3">
                                <BiUserPlus className="me-2" size={20} />
                                Crear Cuenta
                            </button>
                        </form>

                        <p className="text-center mb-0 small" style={{ color: 'var(--hl-muted)' }}>
                            ¿Ya tienes cuenta?{' '}
                            <Link to="/" className="fw-semibold text-decoration-none" style={{ color: 'var(--hl-primary)' }}>
                                Iniciar Sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
