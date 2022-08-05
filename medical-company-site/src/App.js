import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import CustomerStats from './components/CustomerStats';

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})



function App() {
  return (
    <div>
      <NavBar />
      <CustomerStats />
      <SearchBar />
      {/* <Cart /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
