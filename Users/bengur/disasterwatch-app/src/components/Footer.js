import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-fema-dark border-t border-fema-green px-4 py-6 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-fema-green">DisasterWatch</h2>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><button onClick={() => navigate('/')} className="hover:text-fema-green-light transition">Home</button></li>
              <li><button onClick={() => navigate('/dashboard')} className="hover:text-fema-green-light transition">Dashboard</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-fema-green-light transition">Pricing</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-fema-green-light transition">About</button></li>
            </ul>
          </nav>
          <div className="mt-4 md:mt-0">
            <a 
              href="mailto:contact@calyvent.com?subject=DisasterWatch%20Inquiry" 
              className="text-fema-green hover:text-fema-green-light transition"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm text-center">
          <p>This tool surfaces public FEMA declaration data for informational purposes. Always confirm current assistance program details directly at fema.gov or disasterassistance.gov.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;