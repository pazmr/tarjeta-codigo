var ROWS = [1,2,3,4,5,6,7,8];
var COLUMNS = ['A','B','C','D','E','F','G','H','I','J'];
var NUMBERS =[20,18,66,43,88,74,62,54,26,74,55,98,71,13,42,82,47,38,98,86,52,81,4,23,42,21,10,33,51,39,2,62,50,76,45,54,27,1,99,77,58,31,88,47,42,32,90,65,17,68,24,90,47,88,46,41,73,81,30,20,85,68,95,81,73,25,58,75,8,81,99,97,96,8,54,72,13,27,70,55];

function getCode(value) {
    var counter = 0;
    var dict = {};
    for (var row = 0; row < ROWS.length; row++) { 
        for (var col = 0; col < COLUMNS.length; col++) { 
                dict[ROWS[row]+COLUMNS[col]] = NUMBERS[counter];
                counter++;
        }            
    }
    
    if (!value){
        return false
    }
    
    var extractedValue = value.match(/[a-z0-9]/gi).join("").toUpperCase()
    
    if (extractedValue.length!=6) {
        return false
    }
    
    var key1 = extractedValue.slice(0,2);
    var key2 = extractedValue.slice(2,4);
    var key3 = extractedValue.slice(4,6);
    
    var result = pad(dict[key1],2) + "-" + pad(dict[key2],2) + "-" + pad(dict[key3],2)
    return result
    
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function addHtml(code, divId) {
    if (code) {
        document.getElementById(divId).innerHTML = code;    
    }
    else{
        document.getElementById(divId).innerHTML = 'código invalido';    
    }

}