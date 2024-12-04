import './App.css';
import BackToTop from './components/common/BackToTop';
import Footer from './components/common/Footer';
import AccordionTest from './components/home/AccordionTest';
import Funding from './components/home/Funding';
import Hero from './components/home/Hero';
import Rating from './components/home/Rating';
import Revenue from './components/home/Revenue';
import SupportedPlatforms from './components/home/SupportedPlatforms';

function App() {
  return (
  <>
  <BackToTop/>
      <Hero/>
      <SupportedPlatforms/>
      <Revenue/>
      <Rating/>
      <AccordionTest/>
      <Funding/>
      <Footer/>
  </>
  );
}

export default App;
