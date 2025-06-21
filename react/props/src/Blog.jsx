import React from 'react'

//version 3 => destructuring 
function Blog({image, title , description}) {
// function Blog(props) {
//     const {image, title , description} = props
  return (
    <div className='card'>
        <img width={200} src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}


 //version 2
// "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
// function Blog(props) {
//   return (
//     <div className='card'>
//         <img width={200} src={props.image} alt="" />
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//     </div>
//   )
// }
 //version 1
// function Blog() {
//   return (
//     <div className='card'>
//         <img width={200} src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" alt="" />
//         <h3>Cat</h3>
//         <p>Lorem ipsum dolor sit amet consectetur.</p>
//     </div>
//   )
// }

export default Blog