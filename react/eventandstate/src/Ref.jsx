import React, { useRef, useState } from 'react'

function Ref() {
    //hooks provide functional components react actual features 
    //hooks only used in functional component
    // use hooks at the top of the component and can not be used inside condition or loop
    const [state,setState] = useState(true)
    let element = useRef(null)
    let count = useRef(0)
    let normalCount = 0
    function increase(){
        count.current+=1
        normalCount++;
        console.log(count.current ,normalCount)
        element.current.style.color= 'red'
    }
  return (
    <div>
       <button onClick={increase}>increase</button> {count.current} - {normalCount}
       <button onClick={()=>setState(!state)}>re-render</button>
       <h3 ref={element} >hello everyone </h3>
    </div>
  )
}

export default Ref