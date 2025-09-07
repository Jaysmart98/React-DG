
import React, { useState } from 'react';

const App = () => {
 
  
  const [subCategories, setSubCategories] = useState([
    { id: crypto.randomUUID(), value: '' }
  ]);

  // Function to add a new sub-category to the list

  const addSubCategory = () => {
    const newId = crypto.randomUUID();
    setSubCategories([...subCategories, { id: newId, value: '' }]);
  };

  // Function to delete a sub-category from the list by its ID

  const deleteSubCategory = (id) => {
    setSubCategories(subCategories.filter(sub => sub.id !== id));
  };

  // Function to handle changes to the input fields

  const handleInputChange = (id, event) => {
    setSubCategories(
      subCategories.map(sub =>
        sub.id === id ? { ...sub, value: event.target.value } : sub
      )
    );
  };


  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sub-Categories</h2>
        <p className="text-sm text-gray-500 mb-4">You can add multiple sub-categories for a project. Each sub-category has an option to delete.</p>

        <div className="space-y-4">

          {/* Map over the subCategories array to render inputs and delete buttons */}

          {subCategories.map((sub, index) => (
            <div key={sub.id} className="flex items-center space-x-2">
              <input
                type="text"
                value={sub.value}
                onChange={(e) => handleInputChange(sub.id, e)}
                placeholder={`Sub-category ${index + 1} name`}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                onClick={() => deleteSubCategory(sub.id)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
                aria-label="Delete sub-category"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Button to add a new sub-category */}

        <button
          onClick={addSubCategory}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add another sub-category
        </button>
      </div>
    </div>
  );
};

export default App;

