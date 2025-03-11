let main = document.querySelector('main')

main.addEventListener('click', (e) =>{
    let vandera = e.target.id

    if(vandera =='azul'){
        main.style.backgroundColor = 'blue'
    }else if(vandera =='rojo'){
        main.style.backgroundColor = 'red'
    }else if(vandera =='verde'){
        main.style.backgroundColor = 'green'
    }else if(vandera =='morado'){
        main.style.backgroundColor = 'blueviolet'
    }else if(vandera =='amarillo'){
        main.style.backgroundColor = 'yellow'
    }
});
