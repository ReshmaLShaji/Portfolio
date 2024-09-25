
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from'./components/Aboutme';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from'./components/Contact';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutme' element={<Aboutme/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
