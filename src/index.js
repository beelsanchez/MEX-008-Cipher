//Declaro mis variables. Se obtiene el valor de la caja con un evento//

const inputEncode=document-getElementById('txt_cipher');
const offset=document.getElementById('offset');
const btncifrar=document.getElementById('botoncifrar');
const inputDecode=document.getElementById('input_decoder')

//Tambien se puede utilizar keyup//
//Evento DOM/funcion cipher//
//Mandar a llamar al boton//
//ultimo es de offset//

btncifrar.addEventListener('click',(e) => {
    e.preventDefault();

    inputDecode.value=window.cipher.encode(parseInt(offset.value),inputEncode,value)
})




























//variable para mostrar segunda sección//
const showCipherSection = document.getElementById('cipher-caesar');
//variable para ocultar la primera sección//
const hideFakeSection = document.getElementById('fake');

//Crear una función flecha que manipule las secciones//
const metamorfosis = () => {
    hideFakeSection.classList.add('hide');
    showCipherSection.classList.remove('hide');
}
//Crear una función flecha que manipule las secciones de vuelta//
const metamorfosisBack = () => {
    hideFakeSection.classList.remove('hide');
    showCipherSection.classList.add('hide');

    addEventListener
}
