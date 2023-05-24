const textArea = document.querySelector(".texto");
const mensaje =document.querySelector(".mensaje");

//Boton ejecuta encriptar
function enc(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

//Funcion para encriptar y validar texto
function encriptar(stringEncriptado){
    var regex = /^[A-Za-z0-9 ]+$/;
    let codigo = [["e","enter"], ["i","ines"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    var esValido = regex.test(stringEncriptado);
    if (!esValido) {
        alert("Contiene caracteres especiales.");
    }else{
    for(let i=0; i< codigo.length; i++){
        if(stringEncriptado.includes(codigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }       
    }
    return stringEncriptado;
    }
}

//Boton ejecuta desencriptar
function dec(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

//Funcion para desencriptar y validar texto
function desencriptar(stringDesencriptado){
    var regex = /^[A-Za-z0-9 ]+$/;
    let codigo = [["e","enter"], ["i","ines"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    var esValido = regex.test(stringDesencriptado);
    if (!esValido) {
        alert("Contiene caracteres especiales.");
    }else{
        for(let i=0; i< codigo.length; i++){
            if(stringDesencriptado.includes(codigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);
            }       
        }
        return stringDesencriptado;
    }
    
}

//Boton ejecuta copiar y manda mensaje
function copiar(){
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    alert("Texto copiado al portapapeles.");
}
