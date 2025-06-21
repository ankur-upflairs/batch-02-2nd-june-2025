import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content ,{Footer } from './Content'

function App() { 

  return (
    <>     
     <Header ></Header>
     <Content />     
     <Footer />
    </>
  )
}


// //jsx => writing html inside js
// //complete jsx must wrap inside a single element 
//   //every tag should closed
//   //use className insteed class  
// //if you want to use js inside jsx then use {}
// //if-else or loops are not allow (inside {})
// let name = 'pankaj'
// let element = <div>
//   <h1 className='a' >hello <br></br> Everyone</h1>
//   <input type="text" />
//   <p>hello {name}</p>
// </div>
// //components => class and functional
// // functional components =>normal fn but name start with capital
// //letter
// //always return jsx
// // whenever you use a functional compoent use this as a tag 
// //Fragments => <></>
// function Header() {
//   return <>
//     <p> this is header component  </p> 
//   </>
// }

// function Content(){
//   return <div>
//     this is Content compoent
//     <Footer />
//   </div>
// }

// function Footer(){
//   return <div>
//     this is footer compoent
//   </div>
// }



// function App() {
 

//   return (
//     <>
//      hello world!!!
//      {element}
//      <Header ></Header>
//      <Content />
//     </>
//   )
// }

export default App
