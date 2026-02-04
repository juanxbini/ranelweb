import Navbar from './components/Navbar';
import SocialIcons from './components/SocialIcons';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Proceso from './components/Proceso';
import SobreMi from './components/SobreMi';
import Beneficios from './components/Beneficios';
import Proyectos from './components/Proyectos';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <SocialIcons />
      <Hero />
      <Servicios />
      <Proceso />
      <SobreMi />
      <Beneficios />
      <Proyectos />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
