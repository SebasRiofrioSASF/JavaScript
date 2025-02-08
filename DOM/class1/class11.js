//añadiendo el mismo listener a cada elemento
const listItems = document.querySelectorAll("li")
const classList = document.getElementById("list")


listItems.forEach( (item) => {
  item.addEventListener('click', (event) => {
    event.target.classList.toggle('highlight')
  })
})

//añadiendo un solo listener al padre
const list = document.querySelector('ul')

list.addEventListener('click', (event) => {
  event.target.closest('li').classList.toggle('highlight')
})