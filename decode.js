import cipher from './cipher.js';


document.getElementById("user-text-decoded").addEventListener("keyup", function () {
    const offsetDecode = Number(document.getElementById("offsetDecode").value);
    const userTextDecoded = document.getElementById("user-text-decoded").value.toUpperCase();
    const resultText = document.getElementById("decode-text");
    if (offsetDecode === "") {
        alert("Insira o número do offset!")
    }
    let result = cipher.decode(offsetDecode, userTextDecoded);
    resultText.innerHTML = result;

});




