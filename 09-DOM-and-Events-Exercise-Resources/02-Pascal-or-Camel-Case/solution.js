function solve() {
  let textInput = document.getElementById('text').value.toLowerCase();
  let namingConvention = document.getElementById('naming-convention').value;
  let resultField = document.getElementById('result');

  let splittedText = textInput.split(' ');
  let resultText = '';

  if(namingConvention == 'Camel Case'){
    resultText += splittedText[0];
     for (let index = 1; index < splittedText.length; index++) {
      resultText += splittedText[index][0].toUpperCase() + splittedText[index].slice(1,splittedText[index].length);
      
     }
     resultField.textContent = resultText;
    }
  else if(namingConvention == 'Pascal Case'){
    resultText+= splittedText[0][0].toUpperCase() + splittedText[0].slice(1,splittedText[0].length);
    for (let index = 1; index < splittedText.length; index++) {
      resultText += splittedText[index][0].toUpperCase() + splittedText[index].slice(1,splittedText[index].length);
      
    }

    resultField.textContent = resultText;
  }else {
    resultField.textContent = 'Error!'
  }
}