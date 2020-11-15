import './App.css';
import Navbar from './components/Navbar';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HowItWorks />
      <Portfolio />
      <About />
      <Team />
      <Footer />
    </>
  );
};

export default App;
