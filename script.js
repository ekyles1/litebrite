const square=document.querySelector('.square')

const redButton= document.querySelector('.red')
const greenButton= document.querySelector('.green')
const blueButton= document.querySelector('.blue')

redButton.addEventListener('click',()=>{
    square.style.backgroundColor = 'red'
})
greenButton.addEventListener('click',()=>{
    square.style.backgroundColor = 'green'
})
 blueButton.addEventListener('click',()=>{
    square.style.backgroundColor = 'blue'
 })

