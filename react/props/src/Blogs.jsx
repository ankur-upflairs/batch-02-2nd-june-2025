import React from 'react'
import Blog from './Blog'
import { data } from './data'

import './blogs.css'

function Blogs() {
  return (
    <div className='blogs'>
       {data.map((post,index)=>{
        return <Blog key={post.id} {...post} />
       })}
    </div>
  )
}



// function Blogs() {
//   return (
//     <div className='blogs'>
//        <Blog title={data[0].title} image={data[0].image} description={data[0].description} />
//        <Blog title={data[2].title} image={data[2].image} description={data[2].description} />
//        <Blog {...data[1]} />
//     </div>
//   )
// }
//make a task  json data with field - name , description and make a reusable component with props 

// function Blogs() {
//   return (
//     <div>
//         <Blog image="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" title="Cat"
//         description="this is cat's image" />
//         <Blog image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"
//         title="Dog" description="this is dog's image" />
//     </div>
//   )
// }

export default Blogs