import cipher from './cipher.js';


document.getElementById("user-text-decoded").addEventListener("keyup", function () {
    var offsetDecode = Number(document.getElementById("offsetDecode").value); //Peguei o id do HTML e guardei em uma variável
    var userTextDecoded = document.getElementById("user-text-decoded").value.toUpperCase(); //Peguei o id do texto digitado, deixei em maiusculo e guardei em uma variável
    var resultText = document.getElementById("decode-text"); //"Separei" o espaço no HTML para o resultado
    if (offsetDecode == "") {                            //Abri uma condição para que se o offset fosse vazio
        alert("Insira o número do offset!")              //Pulasse um alert pedindo para o ususário inserir o ofsset
    }
    var result = cipher.decode(offsetDecode, userTextDecoded); //Coloquei as variaveis gaurdadas como parametro para a função do cipher
    resultText.innerHTML = result;                         //Printei o resultado no HTML

});




