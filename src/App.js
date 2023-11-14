import logo from './logo.svg';
import './App.css';
// import Background from './components/Background/Background';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Sidebar2 from './components/Sidebar/Sidebar2';


function App() {
  return (
    <>
    <Sidebar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
      </Routes>
    </Router>
      <Sidebar2/>
    </>
  );
}

export default App;
