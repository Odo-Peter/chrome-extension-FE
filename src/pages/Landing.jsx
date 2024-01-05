import LandingHero from '../components/LandingHero';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <section id="landing">
      <Navbar />
      <LandingHero />
      <Features />
      <HowItWorks />

      <Footer />
    </section>
  );
};

export default Landing;
