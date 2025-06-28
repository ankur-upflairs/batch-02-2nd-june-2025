import React, { useState } from "react";

let initialState = [
  {
    id: 1,
    task: "to buy banana",
    isEdit: false,
  },
  {
    id: 2,
    task: "to complet today's assignment",
    isEdit: false,
  },
];

function ToDoList() {
  const [task, setTask] = useState(initialState);
  const [text, setText] = useState("");
  const [editText,setEditText] = useState("")
  function addTask() {
    let newId = task.length > 0 ? task[task.length - 1].id + 1 : 1;
    setTask([...task, { id: newId, task: text, isEdit: false }]);
    setText("");
  }
  function deleteTask(id) {
    let filterTask = task.filter((v, i) => v.id != id);
    setTask(filterTask);
  }
  function editTask(id){
    let newTask = [...task]
    let i = newTask.findIndex((v)=>v.id == id)
    if(newTask[i].isEdit == true){
        newTask[i].task = editText
        newTask[i].isEdit = false
        setTask(newTask)
        setEditText('')
    }
    else{
        newTask = newTask.map(v=>{
            v.isEdit =false
            return v
        })
        newTask[i].isEdit = true
        setTask(newTask)
        setEditText(newTask[i].task)
    }
    
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />{" "}
      <button onClick={addTask}>Add</button>
      <ul>
        {task.map((v, i) => {
          return (
            <li key={v.id}>
              {v.isEdit ? <input type="text" onChange={(e)=>setEditText(e.target.value)}
              value={editText} /> : v.task}
              <button onClick={()=>editTask(v.id)}>{v.isEdit ? 'save' : 'edit'}</button>
              <button onClick={() => deleteTask(v.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
