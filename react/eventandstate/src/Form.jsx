import React, { useState } from 'react'

function Form() {
    // const [name,setName] = useState('')
    // const [email,setEmail] = useState('')
    const [user, setUser] = useState({
        name:'',
        email:''
    })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form >
            <label htmlFor="" >name</label>
            <input type="text" onChange={handleChange}
            value={user.name}  name='name'
            /><br />
            <label htmlFor="">email</label>
            <input type="text" onChange={handleChange} 
            value={user.email}  name='email'
            /><br />    
        </form>
    </div>
  )
}



// function Form() {
//     const [userName,setUserName] = useState('')

//   return (
//     <div>
//         <form >
//             <label htmlFor="">User name</label>
//             <input type="text" onChange={(event)=>{setUserName(event.target.value)}} 
//             value={userName}    
//             /><br />
//             {userName}
//         </form>
//     </div>
//   )
// }

export default Form