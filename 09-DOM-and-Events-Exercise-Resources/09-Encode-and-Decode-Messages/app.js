function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button');
    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    let textAreas = document.getElementsByTagName('textarea');
    let encodeTextArea = textAreas[0];
    let decodeTextArea = textAreas[1];

    function nextChar (){
        return String.fromCharCode(char.charCodeAt() +1);
    }

    function previousChar (){
        return String.fromCharCode(char.charCodeAt() -1);
    }

    function transformText(text,transformationFunction){
        return text.split('').map(transformationFunction).join('');
    }

    function encodeText(){
        let encodeText = encodeTextArea.value;
        decodeTextArea.value = transformText(encodeText, nextChar);
        encodeTextArea.value = '';
    }

    function decodeText(){
        decodeTextArea.value = transformText(decodeTextArea.value, previousChar);
        
    }

    encodeButton.addEventListener('click', encodeText);
    decodeButton.addEventListener('click', decodeText);


}