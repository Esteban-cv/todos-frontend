import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BiTachometer, BiPlusCircle, BiCog, BiMenu, BiLogOut } from 'react-icons/bi';
import logo from '../../assets/images/Logo.png';

function Navbar() {
    const { logout } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const navItems = [
        { to: '/dashboard', icon: BiTachometer, label: 'Dashboard' },
        { to: '/create-task', icon: BiPlusCircle, label: 'Nueva Tarea' },
        { to: '/settings', icon: BiCog, label: 'Configuración' },
    ];

    return (
        <>
            {/* Botón hamburguesa — solo visible en < lg */}
            <button
                className="btn d-lg-none position-fixed top-0 start-0 m-2 rounded-3 shadow-sm"
                style={{ zIndex: 1060, backgroundColor: 'var(--hl-primary)', color: 'white' }}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebarNav"
                aria-controls="sidebarNav"
            >
                <BiMenu size={22} />
            </button>

            {/* Sidebar fijo en desktop, offcanvas en móvil */}
            <div
                className="sidebar offcanvas-lg offcanvas-start d-flex flex-column p-0"
                style={{
                    width: '260px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    zIndex: 1045,
                }}
                tabIndex="-1"
                id="sidebarNav"
                aria-labelledby="sidebarNavLabel"
            >
                {/* Header del offcanvas (solo móvil) */}
                <div className="offcanvas-header d-lg-none px-3 pt-3 pb-0">
                    <h6 className="offcanvas-title fw-semibold" id="sidebarNavLabel">Menú</h6>
                    <button
                        type="button"
                        className="btn-close btn-sm"
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarNav"
                        aria-label="Cerrar"
                    ></button>
                </div>

                {/* Logo de la app */}
                <div className="sidebar-logo-wrapper text-center">
                    <img
                        src={logo}
                        alt="HacerList"
                        className="img-fluid"
                        style={{ width: '140px', height: '80px', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(79,70,229,0.15))' }}
                    />
                </div>

                {/* Navegación */}
                <nav className="px-3 py-2 flex-grow-1">
                    <p className="sidebar-section-label">Menú</p>
                    <ul className="nav flex-column gap-1">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.to}>
                                <Link
                                    to={item.to}
                                    className={`sidebar-nav-link ${isActive(item.to)}`}
                                    data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarNav"
                                >
                                    <item.icon size={19} />
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Cerrar sesión — pegado abajo */}
                <div className="px-3 pb-3 mt-auto">
                    <hr className="my-2" style={{ borderColor: 'var(--hl-border)' }} />
                    <button
                        className="btn btn-sm w-100 d-flex align-items-center justify-content-center gap-2 py-2 border-0 sidebar-logout-btn"
                        onClick={logout}
                    >
                        <BiLogOut size={18} />
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;