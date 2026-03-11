import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      {/* Sidebar fijo */}
      <Navbar />

      {/* Contenido principal: desplazado a la derecha del sidebar */}
      <div
        className="d-flex flex-column layout-content"
        style={{
          marginLeft: '260px',
          height: '100vh',
          backgroundColor: 'var(--hl-bg)',
        }}
      >
        <main className="flex-grow-1 p-3 p-md-4" style={{ overflowY: 'auto' }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout