import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Stock from './pages/Stock';
import stocks from './stock-data';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stocks' element={<Dashboard stocks={stocks}/>} />
        <Route path='/about' element={<About />} />
        <Route path='stocks/:symbol' element={<Stock stocks={stocks}/>} />
      </Routes>
    </div>
  );
}

export default App;
