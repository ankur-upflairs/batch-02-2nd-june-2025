import React, { useState } from 'react'

let initialState = [
    'to buy banana' , "to complet today's assignment" 
]


function ToDoList() {
    const [task,setTask] = useState(initialState)
    const [text,setText] = useState('')
    function addTask(){
        //first method
        // let newTask = [...task]
        // newTask.push(text)
        // setTask(newTask)
        //second method
        setTask([...task,text])
        setText('')
    }
    function deleteTask(index){
        let filterTask = task.filter((v,i)=>index != i)
        setTask(filterTask)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} value={text} /> <button onClick={addTask}>Add</button>
        <ul>
        {task.map((v,i)=>{
            return <li key={i}>
                {v} <button onClick={()=>deleteTask(i)}>delete</button>
            </li>
        })}

        </ul>
    </div>
  )
}

export default ToDoList