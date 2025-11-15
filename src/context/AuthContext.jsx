import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// 1. Definimos la URL base de nuestro backend
const API_URL = 'http://localhost:8080/api/auth';

// 2. Creamos el Contexto
const AuthContext = createContext();

// 3. Creamos el Proveedor (Provider)
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    // 4. Efecto para actualizar estado si el token cambia (ej. en localStorage)
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

    // 5. Función de Login
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
            console.error("Error en el login:", error.response?.data || error.message);
            setIsAuthenticated(false);
            setToken(null);
            return false;
        }
    };

    // 6. Función de Registro (similar)
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
            console.error("Error en el registro:", error.response?.data || error.message);
            setIsAuthenticated(false);
            setToken(null);
            return false;
        }
    };

    // 7. Función de Logout
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsAuthenticated(false);
        // (En el siguiente paso, también limpiaremos el interceptor de axios)
    };

    // 8. Proveemos el estado y las funciones a los componentes hijos
    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 9. Hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
    return useContext(AuthContext);
};