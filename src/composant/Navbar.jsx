import React from "react";
import logo from "../assets/gm.png";

function Navbar ({ouvert, setOuvert}){
  return (
    
    <nav className="nav">
      <img src={logo} alt="logo" width='100px'/>


       <div className='links'>.
        <p className='link'>Acceuil</p>
        <p className='link'>Produits</p>
        <p className='link'>Contact</p>
        <p className='link'>Commande</p>
    </div>
    <button className='logine' onClick={() => setOuvert(!ouvert)} >Ouvrire</button>


    </nav>
  );
};

export default Navbar;