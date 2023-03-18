function returnIndex (string, firstNum, secondNum) {
    
    if (!string.length || typeof string == 'number') {
        return -1;
    }
    
    for (let i = string.length; i > 0; i--) {
        if (string[i] === firstNum || string[i] === secondNum) {
            return  i;
        }
    }
    
    return -1;
}