import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import SobreMi from './sections/SobreMi'
import Skills from './sections/Skills'
import Trayectoria from './sections/Trayectoria'
import Formacion from './sections/Formacion'
import Proyectos from './sections/Proyectos'
import Contacto from './sections/Contacto'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SobreMi />
      <Skills />
      <Trayectoria />
      <Formacion />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App