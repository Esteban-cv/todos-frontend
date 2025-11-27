import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../css/Sidebar.css';
import '../../css/custom.css';
import { BiTachometer, BiPlusCircle, BiCog, BiSearch } from "react-icons/bi";
import logo from '../../assets/images/Logo.png'

function Navbar() {
    const { logout } = useAuth();
    return (
        <nav className="sidebar p-3">
            {/* Título / Marca */}
            <div className="d-flex justify-content-center align-items-center">
                <img className='logo' src={logo} alt="logo" />
            </div>

            {/* Menú de Navegación (Pills verticales) */}
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item mb-2">
                    <Link to="/dashboard" className="nav-link link-light">
                        <BiTachometer className="me-2 fs-5" />
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/create-task" className="nav-link link-light">
                        <BiPlusCircle className="me-2 fs-5" />
                        Nueva Tarea
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link link-light">
                    <BiCog className="me-2 fs-5" />
                        Configuración
                    </Link>
                </li>
            </ul>

            {/* Formulario de búsqueda al final o perfil */}
            <hr />
            <form className="d-flex flex-column" role="search">
                <div className="input-group mb-2">
                    <span className="input-group-text"><BiSearch /></span>
                    <input className="form-control" type="search" placeholder="Buscar..." aria-label="Search" />
                </div>
                <button className="btn btn-info w-100" type="submit">Buscar</button>
            </form>

            {/* Opcional: Botón de Logout */}
            <div className="d-flex flex-column my-2">
                <button className='btn btn-warning' onClick={logout}>Cerrar Sesión</button>
            </div>
        </nav>
    );
}

export default Navbar;