import cipher from './cipher.js';


document.getElementById("user-text-encoded").addEventListener("keyup", function () {
  const offsetEncode = Number(document.getElementById("offsetEncode").value);
  const userTextEncoded = document.getElementById("user-text-encoded").value.toUpperCase();
  const resultText = document.getElementById("encoded-text");
  if (offsetEncode === "") {
    alert("Insira o número do offset!")
  }
  let result = cipher.encode(offsetEncode, userTextEncoded);
  resultText.innerHTML = result;

});




