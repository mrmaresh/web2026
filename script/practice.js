box = document.querySelector('.box')

change = 1

box.addEventListener('click', () => {
    if (change == 1)
    {
        box.style.width = "200px"
        box.style.height = "200px"
        change = 0
    }
    else
    {
        box.style.width = "50px"
        box.style.height = "50px"
        change = 1
    }
})
