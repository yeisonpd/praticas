//Declaraciond e variables globales
let opc = document.getElementById('opc')
let input = document.getElementById('input')
let numeros = ['1','2','3','4','5','6','7','8','9','0']
let num = '', num2 = ''
let signo = ''
let vandera = false


opc.addEventListener('click', (e)=>{

    let opcion = e.target.id

    // validacion de operaciones
    if(opcion === 'c'){
        input.value = ''
        num = ''
        num2 = ''

    }else if(opcion === '+'){
        signo = '+'
        if(input.value !== ''){
            num = parseInt(input.value)
            input.value = ''
        }

    }else if(opcion === '-'){
        signo = '-'
        if(input.value !=='' ){
            num = parseInt(input.value)
            input.value=''
            input.value = '-'
            console.log(input.value)
            console.log('ig',num)
        }else{
            input.value = '-'
            console.log('else',num)
        }

    }else if(opcion === '*'){
        signo = '*'
        if(input.value !== ''){
            console.log(input.value)
            num = +input.value
            input.value = ''
        }

    }else if(opcion === '/'){
        signo = '/'
        if(input.value !== ''){
            console.log(input.value)
            num = +input.value
            input.value = ''
        }
    }

    // validacion del operaciones al resultado
    if(opcion === '=' && input.value !==''){
        vandera = true

        if(signo === '+'){
            num2 = +input.value
            let resultado = num + num2
            console.log(resultado)
            input.value = resultado

        }else if(signo === '-'){
            num2 = +input.value[1]
            let resultado = num - num2
            console.log(num2,num)
            input.value = resultado

        }else if(signo === '*'){
            num2 = +input.value
            let resultado = num * num2
            console.log(resultado)
            input.value = resultado

        }else if(signo === '/'){
            num2 = +input.value
            let resultado = num / num2
            console.log(resultado)
            console.log(num,num2)
            input.value = resultado
        }
    }


    for(let i=0; i <= numeros.length; i++){
        if(opcion === numeros[i]){
            if(input.value !=='' && vandera == false){
                let numeroGuardar = input.value;
                input.value = numeroGuardar + numeros[i]
            }else if(vandera == true){
                input.value=''
                input.value = numeros[i]
            }else{
                input.value = numeros[i]
            }
                
        }       
    }
    
})