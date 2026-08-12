import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-fema-green">About DisasterWatch</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-fema-dark p-6 rounded border border-fema-green mb-8">
          <p className="mb-4">
            DisasterWatch is a monitoring tool designed for property managers, landlords with multi-state holdings, 
            insurance agents, and contractors who need to stay informed about disaster declarations in their operational areas.
          </p>
          
          <p className="mb-4">
            Our tool checks the official FEMA OpenFEMA API daily to monitor disaster declarations and alerts users 
            the moment a new disaster is declared in any county they're watching. We provide information on 
            incident type, declaration date, declaration type (Major Disaster/Emergency/Fire Management), 
            assistance programs activated, and a link to the official FEMA record.
          </p>
          
          <div className="bg-fema-dark p-4 border border-fema-green rounded mt-6 mb-6">
            <h2 className="text-xl font-bold mb-3">Data Source</h2>
            <p>We source all information from the official <a href="https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries" className="text-fema-green hover:text-fema-green-light transition">FEMA OpenFEMA API</a>. This tool surfaces public FEMA declaration data for informational purposes.</p>
          </div>
          
          <div className="bg-fema-dark p-4 border border-fema-green rounded mt-6 mb-6">
            <h2 className="text-xl font-bold mb-3">Disclaimer</h2>
            <p>This tool surfaces public FEMA declaration data for informational purposes. Always confirm current assistance program details directly at fema.gov or disasterassistance.gov.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-fema-dark p-6 rounded border border-fema-green">
            <h2 className="text-xl font-bold mb-4 text-fema-green">Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-time monitoring of disaster declarations
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Track multiple counties across different states
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Email and SMS alerts
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Comprehensive disaster information and program details
              </li>
            </ul>
          </div>
          
          <div className="bg-fema-dark p-6 rounded border border-fema-green">
            <h2 className="text-xl font-bold mb-4 text-fema-green">Who Should Use This Tool</h2>
            <p className="mb-4">DisasterWatch is ideal for:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Property managers and landlords with multi-state holdings
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Insurance agents and claims specialists
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Contractors working in disaster-prone areas
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-fema-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Emergency response coordinators
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;