import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-fema-dark border-b border-fema-green px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-fema-green" onClick={() => navigate('/')}>
          DisasterWatch
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><button onClick={() => navigate('/')} className="hover:text-fema-green-light transition">Home</button></li>
            <li><button onClick={() => navigate('/dashboard')} className="hover:text-fema-green-light transition">Dashboard</button></li>
            <li><button onClick={() => navigate('/pricing')} className="hover:text-fema-green-light transition">Pricing</button></li>
            <li><button onClick={() => navigate('/about')} className="hover:text-fema-green-light transition">About</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;