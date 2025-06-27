import React from 'react'




function Blog({image, title , description,isVarified}) {

  let imgStyle={
    width:'100%'
  }
  //text-align , => remove hyphen , convert it to camelcase => textAlign
  return (
    <div style={{
      width:'250px',
      border:'1px solid',
      // backgroundColor: isVarified? 'green': 'red'
    }}>
        <img style={imgStyle} src={image} alt="" />
        <h3 className={`${isVarified ? "varified": "not-varified"}`}
        style={{textAlign:'center'}}>{title}</h3>
        <p>{description}</p>
        <button className='bg-primary' style={{
          backgroundColor:'transparent',
          border:'1px solid',
          padding: '4px 8px',
          borderRadius:'4px'
        }}>know more</button>
        {isVarified ? 'varified':'not varified'}
    </div>
  )
}





//version 3 => destructuring 
// function Blog({image, title , description}) {
// // function Blog(props) {
// //     const {image, title , description} = props

//   return (
//     <div className='card'>
//         <img width={200} src={image} alt="" />
//         <h3>{title}</h3>
//         <p>{description}</p>
//     </div>
//   )
// }


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