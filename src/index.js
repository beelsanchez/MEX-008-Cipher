//Primer boton//
const buttonEntrar = document.getElementById ('buttonEntrar');
//Botones de la imagen principal//
const buttonInstrucciones = document.getElementById('buttonInstrucciones');
const buttonRegresar = document.getElementById ('buttonRegresar');
const buttonMenuPrincipal = getElementById ('buttonMenuPrincipal');
//Botones de la primer imagen//
const buttonReceta1 = document.getElementById('buttonReceta1');
const buttonRegresar = document.getElementById('buttonRegresar');
const buttonMenuPrincipal = document.getElementById ('buttonMenuPrincipal');
//Botones de la segunda imagen//
const buttonReceta2 = document.getElementById('buttonReceta2');
const buttonRegresar = document.getElementById('buttonRegresar');
const buttonMenuPrincipal = document.getElementById('buttonMenuPrincipal');
//Botones de la tercer imagen//
const buttonReceta3 = document.getElementById('buttonReceta3');
const buttonRegresar = document.getElementById('buttonRegresar');
const buttonMenuPrincipal = document.getElementById('buttonMenuPrincipal');








//Declaro mis variables. Se obtiene el valor de la caja con un evento//

const inputEncode=document.getElementById('txt_cipher');
const offset=document.getElementById('offset');
const btncifrar=document.getElementById('botoncifrar');
const inputDecode=document.getElementById('input_decoder');

//Tambien se puede utilizar keyup//
//Evento DOM/funcion cipher//
//Mandar a llamar al boton//
//ultimo es de offset//

btncifrar.addEventListener('click', => {

    inputDecode.value=window.cipher.encode(parseInt(offset.value),inputEncode.value)
})

//Delcarar variables de descifrado
const inputDecode=document.getElementById('txt_cipher');
const offset=document.getElementById('offset');
const btndescifrar=document.getElementById('botondescifrar');
const inputDecoder=document.getElementById('input_decoder');

btndescifrar.addEventListener('click', => {

    inputDecoder.value=window.cipher.decode(parseInt(offset.value),inputDecoder.value)
}) 