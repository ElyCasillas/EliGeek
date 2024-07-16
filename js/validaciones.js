import { conexionApi } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    contraseña: /^.{4,12}$/, // 4 a 12 caracteres.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    contraseña: false,
    correo: false,
}

// Cambia esta constante a la contraseña deseada
const CONTRASEÑA_CORRECTA = "Kiara_1004";

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "contraseña":
            validarCampo(expresiones.contraseña, e.target, 'contraseña');
            validarcontraseña();
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarcontraseña = () => {
    const inputPassword = document.getElementById('contraseña');

    if (inputPassword.value !== CONTRASEÑA_CORRECTA) {
        document.getElementById(`grupo__contraseña`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contraseña`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__contraseña i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__contraseña i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__contraseña .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['contraseña'] = false;
    } else {
        document.getElementById(`grupo__contraseña`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contraseña`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__contraseña i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__contraseña i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__contraseña .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['contraseña'] = true;
    }
}

const inputs = document.querySelectorAll("[data-formulario] input");

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.nombre && campos.contraseña && campos.correo && terminos.checked) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        // Redirige a la siguiente página
        window.location.href = 'add_productos.html';  // Aquí se debe especificar la ruta relativa
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
