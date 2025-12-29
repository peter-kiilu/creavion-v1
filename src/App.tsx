import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Tools />
        <About />
        <Services />
        <Portfolio />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;