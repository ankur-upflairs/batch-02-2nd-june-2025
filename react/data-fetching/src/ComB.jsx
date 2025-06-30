import React from 'react'
import ComC from './ComC'

function ComB({user}) {
  return (
    <div>
        comp B <br />
        <ComC user={user} />
    </div>
  )
}

export default ComB