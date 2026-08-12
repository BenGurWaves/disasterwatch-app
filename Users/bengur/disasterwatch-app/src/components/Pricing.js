import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-fema-green">Pricing</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free Tier */}
        <div className="bg-fema-dark p-6 rounded border border-fema-green">
          <h2 className="text-xl font-bold mb-4">Free Tier</h2>
          <p className="mb-6">Track up to 3 counties</p>
          
          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-fema-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Monitor up to 3 counties
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-fema-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Email alerts
            </li>
            <li className="flex items-center opacity-50">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              SMS alerts
            </li>
            <li className="flex items-center opacity-50">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              Downloadable reports
            </li>
          </ul>
          
          <div className="text-center py-4">
            <p className="text-3xl font-bold mb-4">$0<span className="text-lg">/month</span></p>
            <button 
              onClick={() => navigate('/')}
              className="bg-fema-green hover:bg-fema-green-light text-fema-dark font-bold py-2 px-6 rounded transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Paid Tier */}
        <div className="bg-fema-dark p-6 rounded border-2 border-fema-green">
          <h2 className="text-xl font-bold mb-4">Paid Tier</h2>
          <p className="mb-6">Unlimited counties, SMS alerts, downloadable reports</p>
          
          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-fema-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Unlimited counties
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-fema-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Email alerts
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-fema-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              SMS alerts
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-fema-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Downloadable reports
            </li>
          </ul>
          
          <div className="text-center py-4">
            <p className="text-3xl font-bold mb-4">$9.99<span className="text-lg">/month</span></p>
            <p className="mb-4">or <span className="font-bold">$89/year</span></p>
            <button 
              onClick={() => window.open('https://buy.stripe.com/test_fae01F7Qh263gjOcMO', '_blank')}
              className="bg-fema-green hover:bg-fema-green-light text-fema-dark font-bold py-2 px-6 rounded transition"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-fema-green rounded text-center">
            <div className="text-3xl font-bold text-fema-green mb-2">1</div>
            <h3 className="font-bold mb-2">Add Counties</h3>
            <p>Register the counties where you operate to start monitoring</p>
          </div>
          <div className="p-4 border border-fema-green rounded text-center">
            <div className="text-3xl font-bold text-fema-green mb-2">2</div>
            <h3 className="font-bold mb-2">Get Alerts</h3>
            <p>Receive instant notifications when a disaster declaration is made</p>
          </div>
          <div className="p-4 border border-fema-green rounded text-center">
            <div className="text-3xl font-bold text-fema-green mb-2">3</div>
            <h3 className="font-bold mb-2">Stay Informed</h3>
            <p>Access comprehensive reports for insurance and claims purposes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;