const cipher = {


  encode: (strEncode, offsetEncode) => {
    var solved = "";
    for (var i = 0; i < strEncode.length; i++) {
      var asciiNum = strEncode[i].charCodeAt();
      var caesarNum = (asciiNum - 65 + offsetEncode) % 26 + 65;
      solved += String.fromCharCode(caesarNum)
      console.log(solved);
    };
    return solved;

  },

  decode: (strDecode, offsetDecode) => {
      var solved = "";
      for (var i = 0; i < strDecode.length; i++) {
        var asciiNum = strDecode[i].charCodeAt();
        var caesarNum = (asciiNum + 65 - offsetDecode) % 26 + 65;
        solved += String.fromCharCode(caesarNum)
      };
      return solved;
    }
  }

export default cipher;
