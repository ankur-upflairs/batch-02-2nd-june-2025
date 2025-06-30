import React, { createContext } from 'react'
import ComA from './ComA'

export const userContext = createContext(null)

function Context() {
    let user = 'sunil'
    let name = 'pankaj'
  return (
    <div>
        <userContext.Provider value={name}>
             <ComA user={user} />
        </userContext.Provider>
    </div>
  )
}

export default Context