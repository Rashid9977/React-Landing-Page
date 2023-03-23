import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import About from './About'
import Service from './Service'
import Blog from './Blog'
import Navbar from './Navbar';

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  </>

  );
}

export default App;
