import cipher from './cipher.js';


document.getElementById("user-text-encoded").addEventListener("input", function () {
  var offsetEncode = Number(document.getElementById("offsetEncode").value);
  var userTextEncoded = document.getElementById("user-text-encoded").value.toUpperCase();
  var resultText = document.getElementById("encoded-text");
  var result = cipher.encode(offsetEncode, userTextEncoded);
  resultText.innerHTML = result;
  
});



// if(offsetEncode=="") {
    //alert("Insira o número do offset!")
//}
