import React, { useContext } from 'react'
import { userContext } from './Context'

function ComC({user}) {
    let name  = useContext(userContext)

  return (
    <div>
        comp c  <br />
        user = {user} <br />
        name = {name} 
    </div>
  )
}

export default ComC