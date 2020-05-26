const cipher = {


  encode: (offsetEncode, strEncode) => {
    if (offsetEncode == "" || typeof strEncode !== "string") {
      throw new TypeError('Insira o número do offset ou confira que seu texto não tenha caracteres especiais')
    }
    let solved = "";
    for (let i = 0; i < strEncode.length; i++) {
      const asciiNum = strEncode[i].charCodeAt();
      const caesarNum = (asciiNum - 65 + offsetEncode) % 26 + 65;
      solved += String.fromCharCode(caesarNum)
    }
    return solved;
  },


  decode: (offsetDecode, strDecode) => {
    if (offsetDecode == "" || typeof strDecode !== "string") {
      throw new TypeError('Insira o número do offset ou confira que seu texto não tenha caracteres especiais')
    }
    let solved = "";
    for (let i = 0; i < strDecode.length; i++) {
      const asciiNum = strDecode[i].charCodeAt();
      const caesarNum = (asciiNum + 65 - offsetDecode) % 26 + 65;
      solved += String.fromCharCode(caesarNum)
    }
    return solved;
  }
}

export default cipher;
