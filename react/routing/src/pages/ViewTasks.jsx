import React from 'react'

import { Outlet } from 'react-router'

function ViewTasks() {
  return (
    <div>ViewTasks page
      <br />
      <Outlet />
    </div>
  )
}

export default ViewTasks