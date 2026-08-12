import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('');
  const [county, setCounty] = useState('');

  const handleAddCounty = (e) => {
    e.preventDefault();
    // In a real app, this would add the county to the watched list
    console.log("Adding county", state, county);
  };

  // Mock data for watched counties
  const watchedCounties = [
    { id: 1, name: 'Miami-Dade County', state: 'FL', status: 'Active Declaration' },
    { id: 2, name: 'Los Angeles County', state: 'CA', status: 'Clear' },
    { id: 3, name: 'Harris County', state: 'TX', status: 'Active Declaration' }
  ];

  // Mock data for alert feed
  const alertFeed = [
    {
      id: 1,
      county: 'Miami-Dade County',
      date: '2024-06-15',
      type: 'Flood',
      declarationType: 'Major Disaster',
      programs: ['Individual Assistance', 'Public Assistance']
    },
    {
      id: 2,
      county: 'Harris County',
      date: '2024-05-22',
      type: 'Hurricane',
      declarationType: 'Emergency',
      programs: ['Individual Assistance']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-fema-green">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Watched Counties Section */}
        <div className="lg:col-span-2">
          <div className="bg-fema-dark p-6 rounded border border-fema-green mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Watched Counties</h2>
              <button 
                onClick={() => document.getElementById('add-county-modal').classList.remove('hidden')}
                className="bg-fema-green hover:bg-fema-green-light text-fema-dark font-bold py-2 px-4 rounded transition"
              >
                Add County
              </button>
            </div>
            
            <div className="space-y-4">
              {watchedCounties.map((county) => (
                <div key={county.id} className="p-4 border border-fema-green rounded flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{county.name}, {county.state}</h3>
                    <span 
                      className={`px-2 py-1 text-xs rounded ${
                        county.status === 'Active Declaration' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {county.status}
                    </span>
                  </div>
                  <button className="text-fema-green hover:text-fema-green-light transition">View</button>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Feed */}
          <div className="bg-fema-dark p-6 rounded border border-fema-green">
            <h2 className="text-xl font-bold mb-6">Alert Feed</h2>
            
            <div className="space-y-4">
              {alertFeed.map((alert) => (
                <div key={alert.id} className="p-4 border border-fema-green rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-fema-green">{alert.county}</h3>
                      <p className="text-sm">Declared on {alert.date}</p>
                      <p><span className="font-medium">{alert.type} - {alert.declarationType}</span></p>
                    </div>
                    <span className="px-2 py-1 bg-fema-green text-fema-dark text-xs rounded">
                      New
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {alert.programs.map((program, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700 text-xs rounded">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="lg:col-span-1">
          <div className="bg-fema-dark p-6 rounded border border-fema-green sticky top-4">
            <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Email Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-fema-green"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span>SMS Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-fema-green"></div>
                </label>
              </div>
              
              <p className="text-sm">
                SMS alerts are only available on the paid tier. 
                <button className="text-fema-green hover:text-fema-green-light transition ml-1" onClick={() => navigate('/pricing')}>
                  Upgrade now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add County Modal */}
      <div id="add-county-modal" className="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-fema-dark p-6 rounded border border-fema-green w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Add County</h2>
          
          <form onSubmit={handleAddCounty}>
            <div className="mb-4">
              <label htmlFor="add-state" className="block text-left mb-2">State</label>
              <select
                id="add-state"
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
            
            <div className="mb-6">
              <label htmlFor="add-county" className="block text-left mb-2">County</label>
              <input
                type="text"
                id="add-county"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                placeholder="Enter county name"
                className="w-full p-2 rounded bg-fema-dark border border-fema-green text-white"
                required
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                type="button" 
                onClick={() => document.getElementById('add-county-modal').classList.add('hidden')}
                className="px-4 py-2 border border-fema-green text-fema-green rounded hover:bg-fema-green hover:text-fema-dark transition"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-fema-green hover:bg-fema-green-light text-fema-dark font-bold py-2 px-4 rounded transition"
              >
                Add County
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;