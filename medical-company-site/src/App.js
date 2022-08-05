
import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"
import p5 from "./images/p5.jpg"
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})

function App() {
  return (
    <div>
      <SearchBar />
      <Cart/>
    </div >
  );
}

export default App;
