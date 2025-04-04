// Validación del formulario
let inputNombre = document.querySelector('#nombre')
let errorNombre = document.querySelector('#errorNombre')
const mensajeErrorNombre = "Error: por favor, escriba un nombre válido"

inputNombre.addEventListener('change', () => {

    let nombre = inputNombre.value.trim()

    if(nombre.length < 2) {
        inputNombre.value = ""
        errorNombre.innerHTML = mensajeErrorNombre
        inputNombre.setAttribute('aria-describedby', "errorNombre")        
        inputNombre.focus()
    }

})