import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('');
  const [county, setCounty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would make an API call to check FEMA declarations
    console.log("Checking for declarations in", state, county);
    // For now, just navigate to dashboard so we can see the structure
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-fema-green">
          Know the moment FEMA declares a disaster near you.
        </h1>
        <p className="text-lg mb-8">
          Track counties you operate in, get alerted the moment a disaster is declared
        </p>
        
        <form onSubmit={handleSubmit} className="mb-12 bg-fema-dark p-6 rounded-lg border border-fema-green">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="state" className="block text-left mb-2">State</label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-2 rounded bg-fema-dark border border-fema-green text-white"
                required
              >
                <option value="">Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div>
              <label htmlFor="county" className="block text-left mb-2">County</label>
              <input
                type="text"
                id="county"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                placeholder="Enter county name"
                className="w-full p-2 rounded bg-fema-dark border border-fema-green text-white"
                required
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="bg-fema-green hover:bg-fema-green-light text-fema-dark font-bold py-2 px-6 rounded transition"
          >
            Check Now
          </button>
        </form>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Recent Disaster Declarations</h2>
          <div className="bg-fema-dark p-4 rounded border border-fema-green mb-4">
            <p className="font-bold">Flood Declaration - Major Disaster</p>
            <p>Declared on: June 15, 2024</p>
            <p>Assistance Programs: Individual Assistance, Public Assistance</p>
            <a href="#" className="text-fema-green hover:text-fema-green-light transition block mt-2">View Official Record</a>
          </div>
        </div>

        <div className="bg-fema-dark p-6 rounded border border-fema-green mb-8">
          <h2 className="text-xl font-bold mb-4 text-fema-green">Save this county and get alerts — free account</h2>
          <p>Start monitoring your properties today with a free account that allows you to track up to 3 counties.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-fema-green p-6 rounded">
              <h3 className="text-lg font-bold mb-2">Free Tier</h3>
              <p>Track 3 counties</p>
              <p className="mt-4">$0/month</p>
            </div>
            <div className="border-2 border-fema-green p-6 rounded">
              <h3 className="text-lg font-bold mb-2">Paid Tier</h3>
              <p>Unlimited counties</p>
              <p>SMS Alerts</p>
              <p>Downloadable reports</p>
              <p className="mt-4">$9.99/month or $89/year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;