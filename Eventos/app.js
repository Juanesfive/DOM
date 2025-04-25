// let btn = document.querySelector('#btn_validar');
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name="nombre"]')
const apellido = document.querySelector('[name="apellido"]')
const telefono = document.querySelector('[name="telefono"]')
const documento = document.querySelector('[name="documento"]')
const usuario = document.querySelector('[name="usuario"]')
const contraseña = document.querySelector('[name="contraseña"]')
// btn.addEventListener('click', () => {const nombre = document.querySelector('[name="nombre"]')
//     alert("hola");
// })

// Validación al enviar formulario
const validar = (event) =>{
    event.preventDefault();
    
    if (nombre.value.trim() === "") {
        alert("Llene el campo nombre");
        nombre.focus();
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
        alert("El campo nombre solo debe contener letras");
        nombre.focus();
        return;
    }

    if (apellido.value.trim() === "") {
        alert("Llene el campo apellido");
        apellido.focus();
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
        alert("El campo apellido solo debe contener letras");
        apellido.focus();
        return;
    }

    if (telefono.value.trim() === "") {
        alert("Llene el campo teléfono");
        telefono.focus();
        return;
    }

    if (!/^[0-9]+$/.test(telefono.value)) {
        alert("El campo teléfono solo debe contener números");
        telefono.focus();
        return;
    }

    if (documento.value.trim() === "") {
        alert("Llene el campo documento");
        documento.focus();
        return;
    }

    if (!/^[0-9]+$/.test(documento.value)) {
        alert("El campo documento solo debe contener números");
        documento.focus();
        return;
    }

    // Si todo llega a hacer correcto el formulario se enviara.
    alert("Formulario enviado correctamente");
}


// Aqui estoy Validando en tiempo real que no permita que se ingresa algun numero donde 
// no debe ir por ejemplo en nombre
nombre.addEventListener('keydown', (caracter) => {
    const tecla = caracter.key;
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
        caracter.preventDefault();
    }
});

apellido.addEventListener('keydown', (caracter) => {
    const tecla = caracter.key;
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
        caracter.preventDefault();
    }
});

telefono.addEventListener('keydown', (caracter) => {
    const tecla = caracter.key;
    if (!/^[0-9]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
        caracter.preventDefault();
    }
});

documento.addEventListener('keydown', (caracter) => {
    const tecla = caracter.key;
    if (!/^[0-9]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
        caracter.preventDefault();
    }
});


formulario.addEventListener('submit',validar)




