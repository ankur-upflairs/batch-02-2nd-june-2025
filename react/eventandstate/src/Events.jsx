import React from 'react'

function Events() {
    function handleClick(name){
        if(name) alert(`hi!${name} how are you ?`)
        else alert(`hi! how are you ?`)
    }
     function handleClick1(name){
       
        alert(`hi! how are you ?`)
    }
  return (
    <div >      
       <h3> without arguments  </h3>
        <button onClick={handleClick1} >click here</button>
        <h3>with arguments</h3>
        <button onClick={()=>{handleClick('sunil')}} >click here</button>
    </div>
  )
}

export default Events