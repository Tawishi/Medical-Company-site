import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import CustomerStats from './components/CustomerStats';
import Team from './pages/Team';

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})



function App() {
  return (
    <div>
      
      {/* <Cart /> */}
      <Router>
      <NavBar />
        <Routes>
          
          <Route path="/" element={<><CustomerStats /></>}/>
          <Route path="/login" element={<><Login /></> }/>
          <Route path="/search" element={<><SearchBar /></> }/>
          <Route path="/cart" element={<><Cart /></> }/>
          <Route path="/team" element={<><Team /></> }/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
