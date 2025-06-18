//how to access an html element (dom)
// let p1 = document.getElementById('a')
// console.log(p1)
// let p2 = document.getElementsByClassName('x') //return html collection
// // console.log(p2[0])
// let p3 = document.getElementsByTagName('p') //return html collection
// console.log(p3[1])
// let p4  = document.querySelector('.x')
// console.log(p4)
// let p5 = document.querySelectorAll('.x')
// console.log(p5) //return node list

//access and manipulate text and html
// let para = document.getElementById('b')

// console.log(para.innerText)
// console.log(para.innerHTML)
// // para.innerText = "hello everyone"
// para.innerHTML = `hello <i>everyone</i>`

// ask user for their age if they 18 + than show a paragraph with welcome other 
// not allowed 
// based on current time show a msg inside paragraph , good morning , after noon , everning
//manuplating styles
let para = document.getElementById('a')
// para.style.color = 'red'
//remove hyphen and convert it into camel 
// background-color => backgroundColor
// para.style.backgroundColor = 'blue'

//attributes =>
// console.log(para.getAttribute('title'))
// para.setAttribute('title','this is new value')
// console.log(para.getAttribute('title'))
// para.setAttribute('style','color:red;')
// On clicking the button, change the background color of the card and update its inner text and attributes.
// On mouse over, show tooltip text using innerHTML and attribute manipulation.
// display : none /block 

// let tooltip = document.querySelector('.z')
// let tooltipText = document.querySelector('.y')
// tooltip.addEventListener('mouseover',function(){
//     tooltipText.style.display = 'block'
// })

// tooltip.addEventListener('mouseleave',function(){
//     tooltipText.style.display = 'none'
// })
//class manipulation =>
let para1 = document.getElementById('c')
// para1.classList.remove('b')
para1.classList.add('c')
para1.classList.toggle('b')
// Toggle between light and dark mode using classList.toggle()
// On mouse enter, add a highlight class; on mouse leave, remove it.


// let mode = document.getElementById('mode')

// mode.addEventListener('click',function(){
//     let text = this.innerText
//     if(text == 'Dark Mode'){
//         this.innerText = 'Light Mode'
//         document.body.classList.toggle('dark')
//     }
//     else{
//          this.innerText = 'Dark Mode'
//         document.body.classList.toggle('dark')

        
//     }
// })

let box = document.querySelector('.box')
let left = 0
setInterval(function(){
    // console.log(box)
    box.style.marginLeft =  `${left}px`
    
    left++;
    if(left == 500){
        left = 0
    }
    // console.log(left)
},10)

// localStorage.setItem('title', 'exprense')
// console.log(localStorage.getItem('title'))































