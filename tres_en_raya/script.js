const tablero = document.getElementById('tablero');

async function obtenerProductos() {
    try {
        const respuesta = await fetch('http://localhost:3000/productos'); // Realiza la solicitud
        const productos = await respuesta.json(); // Procesa el JSON de la respuesta
        console.log(productos); // Muestra los productos en la consola
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}

obtenerProductos(); // Llamar a la función 

let contenido = tablero.children

let i = 1 //variable de control


tablero.addEventListener('click',(e)=>{
    e.preventDefault();
    let text = e.target.textContent

    if(text == 'x' || text == 'o'){
        alert("esta casilla ya esta ocupada")
    }else{
        if(i%2 == 0){
            let div = document.getElementById(text)
            div.textContent = 'o'
            div.className = 'o'
        }else{
            let div = document.getElementById(text)
            div.textContent = 'x'
            div.className = 'x'
        }

        i++
    }

    setTimeout(()=>{
        validar()
    },100)
})


const validar = ()=>{
    console.log('a')
    let tablero = []
    let cont = 0
    let max = 9

    if(i == 10){
        alert("El juego quedo en empate")
        location.reload()
    }

    for(valor in contenido){
        tablero.push(contenido[valor].textContent)
        cont++
        if(cont == max){
            break
        }
    }

    //validacion del tablero para indicar que jugador gano
    if(tablero[0] == 'x' && tablero[1] == 'x' && tablero[2] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[0] == 'o' && tablero[1] == 'o' && tablero[2] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }

    if(tablero[3] == 'x' && tablero[4] == 'x' && tablero[5] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[3] == 'o' && tablero[4] == 'o' && tablero[5] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }

    if(tablero[6] == 'x' && tablero[7] == 'x' && tablero[8] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[6] == 'o' && tablero[7] == 'o' && tablero[8] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }

    if(tablero[0] == 'x' && tablero[3] == 'x' && tablero[6] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[0] == 'o' && tablero[3] == 'o' && tablero[6] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }

    if(tablero[1] == 'x' && tablero[4] == 'x' && tablero[7] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[0] == 'o' && tablero[1] == 'o' && tablero[2] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }

    if(tablero[2] == 'x' && tablero[5] == 'x' && tablero[8] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[2] == 'o' && tablero[5] == 'o' && tablero[8] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }

    if(tablero[0] == 'x' && tablero[4] == 'x' && tablero[8] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[0] == 'o' && tablero[4] == 'o' && tablero[8] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }

    if(tablero[2] == 'x' && tablero[4] == 'x' && tablero[6] == 'x'){
        alert('juagdor X gano')
        location.reload()
    }else if(tablero[2] == 'o' && tablero[4] == 'o' && tablero[6] == 'o'){
        alert('juagdor O gano')
        location.reload()
    }
}