import React , {useState} from 'react'

function State() {
    //its  a memory of component 
    // when state changes it rerenders component
    //value of a state is preserved b/w 2 renders
    const [count,setCount] = useState(0)
    //state is immutable (can not change it)
    //to change the state use setter function
     function increase(){
        setCount(count+1) 
     }
     function decrease(){
        setCount(count-1)
     }
  return (
    <div>
        <button onClick={increase}>increase </button>
        {" "} {count}{" "}
        <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default State