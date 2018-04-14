var pattern = /^[a-zA-Z0-9\.\@\_\-\!\#\$\%\&\'\*\+\/\=\?\^\`\{\|\}\~\-]/;
var patternForFirstChar = /^[a-z]/;

function checkCharacters() {
  var inputedCharsLength = document.getElementById("inputField").value.length;
  var inputChar = window.event.key;
  // предполагается, что первый символ только латинская маленькая буква
  return inputedCharsLength == 0 ? patternForFirstChar.test(inputChar) : pattern.test(inputChar);
};