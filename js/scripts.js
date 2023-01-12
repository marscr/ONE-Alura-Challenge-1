//Selecciona los botones
let btnencriptar = document.querySelector("#btnEncriptar");
let btndesencriptar = document.querySelector("#btnDesencriptar");
let btncopiar = document.querySelector("#btnCopiar");
//Agrega eventos a los botones
btnencriptar.addEventListener("click",function(){
    encriptar_desencriptar(1);
});
btndesencriptar.addEventListener("click",function(){
    encriptar_desencriptar(2);
});
btncopiar.addEventListener("click",copiar);
/******************************
 * Funciones
 *****************************/
//Función que encripta o desencripta según lo solicitado
function encriptar_desencriptar(variable){
    let mensaje = document.querySelector("#mensaje");
    let resultado = document.querySelector("#resultado");
    let texto = mensaje.value;
    //Depende del botón encripta o desencripta
    if( variable == 1){
        texto = texto.replace("e","enter");
        texto = texto.replace("i","imes");
        texto = texto.replace("a","ai");
        texto = texto.replace("o","ober");
        texto = texto.replace("u","ufat");
    }else if( variable==2){
        texto = texto.replace("ufat","u")
        texto = texto.replace("ober","o");
        texto = texto.replace("ai","a");
        texto = texto.replace("imes","i");
        texto = texto.replace("enter","e");
        
    }
    //Asigna los valores
    resultado.value=texto;
    mensaje.value="";
    
}
//Función que copia el texto de la caja de mensajes al portapapeles
function copiar(){
    let resultado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(resultado).then(() => {
        console.log('Se copió el texto con éxito');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
