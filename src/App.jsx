import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/Main/Heading';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;
      
      console.log('ScrollY:', scrollPosition, 'ScreenWidth:', screenWidth);

      
      let secondImageThreshold = 540;
      let thirdImageThreshold = 2382;
      
      if (screenWidth < 768) { 

        secondImageThreshold = 700;
        thirdImageThreshold = 4300; 
      }

      if (scrollPosition < secondImageThreshold) {
        document.body.style.background = "url('https://i.gifer.com/MPyj.gif')";
        document.body.style.backgroundAttachment = 'fixed';
      } 
      else if (scrollPosition >= secondImageThreshold && scrollPosition <= thirdImageThreshold) {
        document.body.style.background = "url('https://img.freepik.com/free-vector/gradient-black-backgrounds-with-golden-frames_23-2149166648.jpg?t=st=1728801708~exp=1728805308~hmac=2b763a9a696529dcb13e26b1fa08c47f91ddd9444b0af918bc11d77ace0c0036&w=996')";
        document.body.style.backgroundAttachment = 'fixed';
      } 
      else if (scrollPosition >= thirdImageThreshold) {
        document.body.style.background = "url('https://img.freepik.com/free-vector/luxury-background-modern-design-abstract-green-dark_343694-2186.jpg?t=st=1728803631~exp=1728807231~hmac=a39a644d3ddf80f2d5cbaeef508277854461493d7dbe8428a8d48379ab3802f8&w=996')";
        document.body.style.backgroundAttachment = 'fixed';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Heading />
      <Services />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
