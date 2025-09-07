import React from 'react'
import { useState } from 'react'
import Button from '../../primaryComponents/Button/Button.jsx'
import Input from '../../primaryComponents/Input/Input.jsx'
import './Categories.css'

const Categories = () => {

    const [list, setList] = useState([]);
    const [newList, setNewList] = useState("");
    const [count, setCount] = useState(1);
  
  
    const handleAddTodo = () => {
       console.log(list)
       
    }
  
    const  handleDelete = (id) => {
      setList(list.filter((item) => item.id !== id));
    }

  
    return (
      <>
  
        <div id='main-container'>
          
        <div id='container1'>
          <h4>Categories List</h4>

          <div className='input-container'>
          <Input type='text' label='' placeholder={"Enter your category name"} onChange={(e) => setNewList(e.target.value)} />
          </div>
        </div>

          <hr />
  
          <div className='todo-list'>
          <h4>List :</h4>

                <div id='map'>
                <Button text={"Delete"} action={handleDelete}/>
                <Input label='' placeholder='Enter sub-category name'/>
                </div>

            <ul>
              {list.map((item) => 
                  (<li  key={item.id}> 
                    <Input id="checkboxx" type='checkbox'/>
                    {item.task} 
                    <Button colorParams={"#ffff"} bgcolor={"blue"} text={"Delete"} action={() => handleDelete(item?.id)}/>
              </li>))}
            </ul>
          </div>

          <div id='btn-container'>
          <Button bgcolor={"white"} colorParams={"#ffff"} action={handleAddTodo} text={"Add another sub-category"}/>
          </div>

        </div>
      </>
    )
  }
  

export default Categories


