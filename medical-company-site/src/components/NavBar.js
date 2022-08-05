import './style.css'
import logo from '../images/favicon-32x32.png'

function NavBar() {
    return (
        <header>
            <a href="/" className="logo"><img src={logo} alt="Logo"/>Medico</a>
            <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Customers</a></li>
                <li><a href="/">Shop</a></li>
            </ul>
        </header>
    );
};

export default NavBar;