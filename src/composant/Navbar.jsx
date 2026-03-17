import { NavLink } from "react-router-dom";
import logo from "../assets/gm.png";

function Navbar({ ouvert, setOuvert }) {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" width='100px' />
      <div className='links'>
        <ul>
          <li><NavLink to="/" >Accueil</NavLink></li>
          <li><NavLink to="/contact" >Contact</NavLink></li>
          <li><NavLink to="/produits">Produits</NavLink></li>
        </ul>
      </div>
      <button className='logine' onClick={() => setOuvert(!ouvert)}>Ouvrir</button>
    </nav>
  );
}

export default Navbar;