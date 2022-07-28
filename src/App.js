import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Engineering from './components/Engineering/Engineering';
import Software from './components/Software/Software';
import Contact from './components/Contact/Contact';
import Aboutme from './components/Aboutme/Aboutme';

function App() {
  return (
    <div className='flex flex-row overflow-hidden'>
      <Navbar />
      <main className='grid w-4/5 place-content-center'>
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
