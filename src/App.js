import Header from './Header';
import Footer from './Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Particle from './components/Particle';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Particle />
    <div className='bg-black flex flex-col w-full z-10'>
      <div className='z-20'>
      <Header />
      <Toaster position="top-right" reverseOrder={false} className='z-50' />
      </div>
      <div className='z-10'>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      </div>
    </div>
    </>
  );
}

export default App;

