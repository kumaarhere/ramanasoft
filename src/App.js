import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Hire from './components/Hire';
import StaffHire from './components/StaffHire';

function App() {
  return (
    <div className=''>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/hire' element={<Hire/>}/>
        <Route path='/about-staff-hiring' element={<StaffHire/>}/>

       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
