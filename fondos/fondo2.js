let section = document.getElementById('section')
let main = document.querySelector('#main')

main.addEventListener('click', (e) =>{
    let color = e.target.id

    if(color === 'rojo'){
        main.style.backgroundColor = 'red'
    }else if(color === 'verde'){
        main.setAttribute('style', 'background-color: green;')
    }else if(color === 'amarillo'){
        main.style.backgroundColor = 'yellow'
    }else if(color === 'azul'){
        main.setAttribute('style', 'background-color: blue;')
    }
})