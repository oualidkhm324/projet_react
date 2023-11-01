import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { CV } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const lastModifiedDate = new Date().toLocaleString();

  return (
    <div className="opp ml-20 mr-20">
      <header className="flex justify-end items-center mb-15">
        <img className="w-1/6" src="images/emi.png"  alt="logo de EMI" />
        <nav className="flex justify-end">
          <NavLink
            className="hover:text-[#EF5131] mr-6"
            style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            className="hover:text-[#EF5131] mr-6"
            style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
            to="/Ressources"
          >
            Mon CV
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ressources" element={<CV />} />
      </Routes>
      
      <div className="mt-7 footer">
        Dernière modification : {lastModifiedDate}
        <pre>&copy; Tous droits réservés.</pre>
      </div>
    </div>
  );
}

export default App;
