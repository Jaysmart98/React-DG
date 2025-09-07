import React from 'react'
import { useState } from 'react'
import Input from '../../primaryComponents/Input/Input.jsx'
import './Categories.css'


const Categories = () => {
    const [subCategories, setSubCategories] = useState([
        { 
          id: crypto.randomUUID(), 
          value: '' }
      ]);

  const addSubCategory = () => {
    const newId = crypto.randomUUID();
    setSubCategories([...subCategories, { id: newId, value: '' }]);
  };

  const deleteSubCategory = (id) => {
    setSubCategories(subCategories.filter(sub => sub.id !== id));
  };

   const handleInputChange = (id, event) => {
    setSubCategories(
      subCategories.map(sub =>
        sub.id === id ? { ...sub, value: event.target.value } : sub
      )
    );
  };

  
    return (

        <div id='main-container'>
        <div id='container1'>
          <h4>Categories List</h4>

          <div className='input-container'>
          <Input type='text' label='' placeholder={"Enter your category name"} />
          </div>
        </div>
  
          <div className='todo-list'>
          <h4>List :</h4>

        <div className='Input-container2'>

         {subCategories.map((sub) => (
            <div id='sub-container' key={sub.id}>
              <button onClick={() => deleteSubCategory(sub.id)}> Delete </button>
              <input id='subInput' type="text" value={sub.value} onChange={(e) => handleInputChange(sub.id, e)} placeholder={"Enter Sub-category name"} />
            </div>
          ))}
        </div>

          <div id='btn-container'>
          <button onClick={addSubCategory}>Add another sub-category</button>
          </div>

        </div>
        </div>
    )
  }

export default Categories
