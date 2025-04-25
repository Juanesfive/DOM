import { esvalido } from "./modulo.js";

// let btn = document.querySelector('#btn_validar');
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contraseña = document.querySelector('[name="contraseña"]');
const politicas = document.querySelector("#politicas");
const boton = document.querySelector("#btn_validar");

// btn.addEventListener('click', () => {const nombre = document.querySelector('[name="nombre"]')
//     alert("hola");
// })

// Validación al enviar formulario
const validar = (event) => {
  event.preventDefault();

  if (nombre.value.trim() === "") {
    if (nombre.nextElementSibling) {
      nombre.nextElementSibling.remove();
    }

    alert("Llene el campo nombre");
    nombre.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error");
    mensaje.textContent = "EL campo es obligatorio";
    nombre.insertAdjacentElement("afterend", mensaje);
    nombre.focus();

    return;
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
    alert("El campo nombre solo debe contener letras");
    nombre.focus();
    if (event.target.value.lenght >= 10) {
      event.preventDefault();
    }
    return;
  }

  if (apellido.value.trim() === "") {
    if (apellido.nextElementSibling) {
      apellido.nextElementSibling.remove();
    }
    alert("Llene el campo apellido");
    apellido.focus();
    apellido.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error");
    mensaje.textContent = "EL campo es obligatorio";
    apellido.insertAdjacentElement("afterend", mensaje);
    return;
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
    alert("El campo apellido solo debe contener letras");
    apellido.focus();
    return;
  }

  if (telefono.value.trim() === "") {
    if (telefono.nextElementSibling) {
      telefono.nextElementSibling.remove();
    }
    alert("Llene el campo teléfono");
    telefono.focus();
    telefono.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error");
    mensaje.textContent = "EL campo es obligatorio";
    telefono.insertAdjacentElement("afterend", mensaje);

    return;
  }

  if (!/^[0-9]+$/.test(telefono.value)) {
    alert("El campo teléfono solo debe contener números");
    telefono.focus();
    return;
  }

  if (documento.value.trim() === "") {
    if (documento.nextElementSibling) {
      documento.nextElementSibling.remove();
    }
    alert("Llene el campo documento");
    documento.focus();
    documento.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error");
    mensaje.textContent = "EL campo es obligatorio";
    documento.insertAdjacentElement("afterend", mensaje);
    return;
  }

  if (!/^[0-9]+$/.test(documento.value)) {
    alert("El campo documento solo debe contener números");
    documento.focus();
    return;
  }

  if (usuario.value.trim() === "") {
    if (usuario.nextElementSibling) {
      usuario.nextElementSibling.remove();
    }
    alert("Llene el campo usuario");
    usuario.focus();
    usuario.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error");
    mensaje.textContent = "EL campo es obligatorio";
    usuario.insertAdjacentElement("afterend", mensaje);
    return;
  }
  if (contraseña.value.trim() === "") {
    if (contraseña.nextElementSibling) {
      contraseña.nextElementSibling.remove();
    }
    alert("Llene el campo contraseña");
    contraseña.focus();
    contraseña.style.border = "3px solid red";
    const mensaje = document.createElement("span");
    mensaje.classList.add("error");
    mensaje.textContent = "EL campo es obligatorio";
    contraseña.insertAdjacentElement("afterend", mensaje);
    return;
  }

  // Si todo llega a hacer correcto el formulario se enviara.
  alert("Formulario enviado correctamente");
};

// Aqui estoy Validando en tiempo real que no permita que se ingresa algun numero donde
// no debe ir por ejemplo en nombre
nombre.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (
    !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(tecla) &&
    tecla !== "Backspace" &&
    tecla !== "Tab"
  ) {
    caracter.preventDefault();
  }
});

apellido.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (
    !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(tecla) &&
    tecla !== "Backspace" &&
    tecla !== "Tab"
  ) {
    caracter.preventDefault();
  }
});

telefono.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (!/^[0-9]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
    caracter.preventDefault();
  }
});

documento.addEventListener("keydown", (caracter) => {
  const tecla = caracter.key;
  if (!/^[0-9]$/.test(tecla) && tecla !== "Backspace" && tecla !== "Tab") {
    caracter.preventDefault();
  }
});

const limpiar = (event) => {
  if (event.target.value !== "") {
    event.target.classList.remove("error");
    if (nombre.nextElementSibling) {
      nombre.nextElementSibling.remove();
    }
  }
};

const acepta = (event) => {
  if (!politicas.checked) {
    boton.setAttribute("disable", "");
  } else {
    boton.removeAttribute("diseble");
  }
};

addEventListener("DOMContentLoaded", acepta);

politicas.addEventListener("change", acepta);

formulario.addEventListener("submit", validar);

nombre.addEventListener("blur", limpiar);
apellido.addEventListener("blur", limpiar);
// telefono.addEventListener("blur", limpiar);
// documento.addEventListener("blur", limpiar);
// usuario.addEventListener("blur", limpiar);
// contraseña.addEventListener("blur", limpiar);
