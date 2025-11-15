import { StrictMode } from 'react' // Import 1
import { createRoot } from 'react-dom/client'

// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App.jsx'

// --- ¡ESTOS ERAN LOS IMPORTS FALTANTES! ---
import { BrowserRouter } from 'react-router-dom' // Import 2
import { AuthProvider } from './context/AuthContext.jsx' // Import 3

// (Este import no se usa aquí, lo puedes borrar de main.jsx)
// import UsersPage from './pages/LoginPage.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* <--- ARREGLO 1 (Sin "React.") */}
    <BrowserRouter> {/* (Ahora sí funciona) */}
      <AuthProvider> {/* (Ahora sí funciona) */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)