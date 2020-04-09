const cipher = {


  encode: (offsetEncode, strEncode) => { //Peguei o offset e a string digitados pelo usuário
    if (offsetEncode=="" || typeof offsetEncode!=="number" || typeof strEncode!=="string") { //Fiz a condição para que desse Error quando a string fosse vazia ou não string e o offset fosse vazio ou não numero.
      throw new TypeError('Insira o número do offset ou confira que seu texto não tenha caracteres especiais') //Mensagem de erro
    } // *****Esse if roda o teste 100% mas não executa a função no navegador.
    var solved = ""; //Deixei a variavel do resultado declarada
    for (var i = 0; i < strEncode.length; i++) { //Inicnpmiei o for com o contador, parametro e o modificador
      var asciiNum = strEncode[i].charCodeAt(); //Modifiquei o "numero da string" para ser compativel com a do ASCII
      var caesarNum = (asciiNum - 65 + offsetEncode) % 26 + 65; //Utilizei a formula para modificar o numero ASCII para o numero da cifra
      solved += String.fromCharCode(caesarNum)//O resultado é a string referente ao número ASCII
    }
    return solved;
  },


  decode: (offsetDecode, strDecode) => {
    if (offsetDecode=="" || typeof offsetDecode!=="number" || typeof strDecode!=="string") { 
      throw new TypeError('Insira o número do offset ou confira que seu texto não tenha caracteres especiais') 
    }
        var solved = "";
    for (var i = 0; i < strDecode.length; i++) {
      var asciiNum = strDecode[i].charCodeAt();
      var caesarNum = (asciiNum + 65 - offsetDecode) % 26 + 65;
      solved += String.fromCharCode(caesarNum)
    }
    return solved;
  }
}

export default cipher;
