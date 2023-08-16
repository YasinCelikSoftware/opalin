import {useTranslation} from 'react-i18next';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navi from './components/Navi';
import OwnerSays from './components/OwnerSays';
import Partners from './components/Partners';
import Present from './components/Present';
import Setup from './components/Setup';
import Timeline from './components/Timeline';
import './i18n';
import {useState} from 'react';

function App () {
  const {i18n} = useTranslation ();
  const [direction, setDirection] = useState ('');
  const [align, setAlign] = useState ('left');

  const changeLanguage = language => {
    i18n.changeLanguage (language);
    if (language === 'ar') {
      setDirection ('rtl');
      setAlign ('right');
    } else {
      setDirection ('ltr');
      setAlign ('left');
    }
  };

  return (
    <div style={{direction: direction, textAlign: align}}>
      <Navi changeLanguage={changeLanguage} />
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
