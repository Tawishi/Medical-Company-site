import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"
import p5 from "./images/p5.jpg"
import SearchBar from './components/SearchBar';
import Card from './components/Card';

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})

function App() {
  return (
    <div>
      <SearchBar />
      <div className="products">
        <Card
          img={p1}
          name="Roche - COVID-19 At Home Test"
          desc=""
          price="$249"
        />
        <Card
          img={p2}
          name="VIAL SAFE Insulin Bottle Protector Case/Sleeve"
          desc="Protector Case/Sleeve for Diabetes, Never Risk Breaking Your Insulin Vial, Reusable, Durable, Flexible Silicone Protective Sleeve, 2-Pack (Short), Clear"
          price="$550"
        />
        <Card
          img={p5}
          name="Neurobion Forte - Strip of 30 Tablets"
          desc=""
          price="$200"
        />
        <Card
          img={p3}
          name="Sterile Dressing Gauze"
          desc="Sterile Curity Oil Emulsion Non-Adhering Dressing Gauze 3 X 3 6112 bx/50"
          price="$1557"
        />
        <Card
          img={p4}
          name="Siemens Signia Hearing Aid Batteries"
          desc="MF Pack Of 6 Batteries Size 675 Pack Of 3 Strip Battery (Blue)"
          price="$3029"
        />
      </div>
    </div >
  );
}

export default App;
