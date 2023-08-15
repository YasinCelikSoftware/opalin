import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navi from './components/Navi';
import OwnerSays from './components/OwnerSays';
import Partners from './components/Partners';
import Present from './components/Present';
import Setup from './components/Setup';
import Timeline from './components/Timeline';

function App () {
  return (
    <div>
      <Navi />
      <Hero />
      <Present />
      <Partners />
      <Timeline />
      <OwnerSays />
      <Setup />
      <Footer />
    </div>
  );
}

export default App;
