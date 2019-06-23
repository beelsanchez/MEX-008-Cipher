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
