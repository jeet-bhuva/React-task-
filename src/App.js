import React from 'react'
import './App.css'
// import Todo from './Component/Todo'
import { useState } from "react"


function App() {
  const [todos, setTodos] = useState([])

  const [value, setValue] = useState("")

  // console.log("todos-->", todos)

  const onValueChange = (e) => {
    setValue(e.target.value)
  }

  const addTodo = () => {
    setTodos([
      ...todos,
      { name: value, status: false, id: Date.now() }
    ])
    setValue("")
  }

  const handleChange = (id) => {
    // console.log("id---->",id)
    setTodos(
      todos.map(todo => {
        // console.log("todo--->" , todo)
        if (todo.id === id) {
          return {
            ...todo, status: !todo.status
          }
        } else {
          return todo;
        }
      })
    )
  }


  return (
    <div className=" App">
      <p>
        <h3>Add Item 📥 </h3>
        <input value={value} onChange={onValueChange} />
        <button onClick={addTodo}>Add </button>
      </p>
      <div className='items'>
        <h3>All</h3>
        <ul>
          {todos
            .map((todo, i) => {
              return (
                <h4 key={i}>
                  <button className='All_btn' style={{ color: todo.status === true ? "darkgray" : "black", textDecoration: todo.status === true ? "line-through " : "none" }} onClick={() => handleChange(todo.id)}>  {todo.status === true ? "👌" : "👋"} {todo.name} </button>
                </h4>
              )
            })}
        </ul>

        <h3>InCompleted</h3>
        <ul>
          {todos
            .filter(todo => !todo.status)
            .map((todo, i) => (
              <h4 key={i}>
                <button className='Incomplet_btn' onClick={() => handleChange(todo.id)} >👋 {todo.name}</button>
              </h4>
            ))}
        </ul>

        <h3>Completed</h3>
        <ul style={{ textDecoration: "line-through " }} >
          {todos
            .filter(todo => todo.status)
            .map((todo, i) => (
              <h4 key={i}>
                <button className='Completed_btn' onClick={() => handleChange(todo.id)}>👌 {todo.name}</button>
              </h4>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App
