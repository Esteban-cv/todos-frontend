import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// URL base del backend
const API_URL = 'http://localhost:8080/api/auth';

// Creación del Contexto
const AuthContext = createContext();

// Creación del Proveedor (Provider)
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    // Efecto para actualizar estado si el token cambia (ej. en localStorage)
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        } else {
            setToken(null);
            setIsAuthenticated(false);
        }
    }, []);

    // Función de Login
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });
            
            const { token } = response.data;
            
            if (!token) {
                return false;
            }
            
            localStorage.setItem('token', token);
            setToken(token);
            setIsAuthenticated(true);
            
            return true;
        } catch (error) {
            setIsAuthenticated(false);
            setToken(null);
            return false;
        }
    };

    // Función de Registro (similar)
    const register = async (name, lastName, email, password) => {
        try {
            const response = await axios.post(`${API_URL}/register`, {
                name,
                lastName,
                email,
                password
            });

            const { token } = response.data;
            
            if (!token) {
                return false;
            }
            
            localStorage.setItem('token', token);
            setToken(token);
            setIsAuthenticated(true);

            return true;
        } catch (error) {
            setIsAuthenticated(false);
            setToken(null);
            return false;
        }
    };

    // Función de Logout
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsAuthenticated(false);
    };

    // Proveemos el estado y las funciones a los componentes hijos
    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};