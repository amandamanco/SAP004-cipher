import cipher from './cipher.js';


document.getElementById("user-text-encoded").addEventListener("keyup", function () {
  var offsetEncode = Number(document.getElementById("offsetEncode").value);
  var userTextEncoded = document.getElementById("user-text-encoded").value.toUpperCase();
  var resultText = document.getElementById("encoded-text");
  if (offsetEncode == "") {
    alert("Insira o número do offset!")
  }
  var result = cipher.encode(offsetEncode, userTextEncoded);
  resultText.innerHTML = result;

});




