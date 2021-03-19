function updateDisplay(newValue){
    var display = document.getElementById('display');
    switch (newValue){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            display.innerHTML += newValue;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if(display.innerHTML.endsWith('+') || display.innerHTML.endsWith('-') || display.innerHTML.endsWith('*') || display.innerHTML.endsWith('/')){
                break;
            }
            else{
                display.innerHTML += newValue;
            }
            break;
        case '=':
            if(display.innerHTML.endsWith('+') || display.innerHTML.endsWith('-') || display.innerHTML.endsWith('*') || display.innerHTML.endsWith('/')){
                display.innerHTML = 'Err';
                break;
            }
            else if(display.innerHTML.length === 0){
                break;
            }
            else{
                display.innerHTML = eval(document.getElementById('display').innerHTML);
            }
            
    }
}