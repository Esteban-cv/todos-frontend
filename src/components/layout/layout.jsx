import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

function layout({ children }) {
  return (
    <div className='app-container'>
        <Navbar />
        <Header />

        <main className='content p-3'>
            {children}
        </main>

        <Footer />
    </div>
  )
}

export default layout