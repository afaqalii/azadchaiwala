const MenuBtn = document.querySelector('.menuBtn')
const ul = document.querySelector('ul')
const bars = document.querySelectorAll(".bar")


MenuBtn.addEventListener('click', ()=> {
  ul.classList.toggle("ulClass")
  bars.forEach((bar) => {
    bar.classList.toggle("active")
  })    
})

ul.addEventListener("click", ()=> {
    ul.classList.toggle('ulClass')
    bars.forEach((bar) => {
      bar.classList.toggle("active")
    })
  })