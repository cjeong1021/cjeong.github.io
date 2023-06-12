import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Engineering from './components/Engineering/Engineering';
import Software from './components/Software/Software';
import Contact from './components/Contact/Contact';
import Aboutme from './components/Aboutme/Aboutme';
import { useEffect, useState } from 'react';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setShowMobileNavMenu(false);
    } else if (window.innerWidth < 767) {
      setShowMobileNavMenu(true);
    }
  }, []);

  return (
    <div className='md:flex flex-row overflow-hidden'>
      <Navbar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        showMobileNavMenu={showMobileNavMenu}
        setShowMobileNavMenu={setShowMobileNavMenu}
      />
      <main className='md:grid md:w-4/5 place-content-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/engineering' element={<Engineering />} />
          <Route path='/software' element={<Software />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<Aboutme />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
