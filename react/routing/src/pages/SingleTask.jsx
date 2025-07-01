import React from "react";
import { useNavigate } from "react-router";

function SingleTask({title, description, duedate, id}) {
    let navigate = useNavigate()
    function showTask(id) {
        navigate(`/task/${id}`)
    }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{duedate}</h6>
          <p className="card-text">
            {description}
          </p>
          <button onClick={()=>navigate(`/task/${id}`)} className="card-link">
            view Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleTask;
