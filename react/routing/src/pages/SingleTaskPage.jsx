import React from "react";
import { useParams } from "react-router";
import data from '../data.json'


function SingleTaskPage() {
    let {id} =useParams()
    let task = data.find(v=> v.id == id )
  return (
    <div>      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{task.duedate}</h6>
          <p className="card-text">
            {task.description}
          </p>          
        </div>
      </div>
    </div>
  );
}

export default SingleTaskPage;