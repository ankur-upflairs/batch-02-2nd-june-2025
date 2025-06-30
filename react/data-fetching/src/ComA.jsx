import React from 'react'
import ComB from './ComB'

function ComA({user}) {
  return (
    <div>ComA
        <br />
        <ComB user={user} />
    </div>
  )
}

export default ComA