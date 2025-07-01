import React from 'react'
import data from '../data.json'
import SingleTask from './SingleTask'
function Home() {
  console.log(data)
  return (
    <div>
        {data.map((task, i)=>{
          return <SingleTask {...task} />
        })}
    </div>
  )
}

export default Home