var temp = '';
function fun0() {
    temp = temp + '0';
    document.getElementById('screen').innerHTML = temp;
}
function fun1() {
    temp = temp + '1';
    document.getElementById('screen').innerHTML = temp;
}
function fun2() {
    temp = temp + '2';
    document.getElementById('screen').innerHTML = temp;
}
function fun3() {
    temp = temp + '3';
    document.getElementById('screen').innerHTML = temp;
}
function fun4() {
    temp = temp + '4';
    document.getElementById('screen').innerHTML = temp;
}
function fun5() {
    temp = temp + '5';
    document.getElementById('screen').innerHTML = temp;
}
function fun6() {
    temp = temp + '6';
    document.getElementById('screen').innerHTML = temp;
}
function fun7() {
    temp = temp + '7';
    document.getElementById('screen').innerHTML = temp;
}
function fun8() {
    temp = temp + '8';
    document.getElementById('screen').innerHTML = temp;
}
function fun9() {
    temp = temp + '9';
    document.getElementById('screen').innerHTML = temp;
}

function backspace() {
    temp = temp.slice(0, -1);

    document.getElementById('screen').innerHTML = temp;

    if (document.getElementById('screen').innerText == '') { document.getElementById('screen').innerHTML = '0'; }

}

function fun10() {
    temp = temp + '.';
    document.getElementById('screen').innerHTML = temp;
}

var result = 0;
var operation;
var flag = '0';


function Clear1() {
     result = 0;
     operation;
     flag = '0';
    temp = '';
    document.getElementById('screen').innerHTML = '0';
}

function clear_last() {
    temp = '';
    document.getElementById('screen').innerHTML = '0';
}


function funmod1() {
    operation = 'mod';
    if(flag == '1')
    {result = result % parseFloat(temp); }
    else{
        result = parseFloat(temp);
        flag = 1;
    }
    
    temp='';
}

function funMinus() {
    operation = 'minus';
    if(flag == '1')
    {result = result - parseFloat(temp); }
    else{
        result = parseFloat(temp);
        flag = 1;
    }
    
    temp='';
}
function funplus1(){
    operation = 'plus';
    if(flag == '1')
    {result = result + parseFloat(temp); }
    else{
        result = parseFloat(temp);
        flag = 1;
    }
    
    temp='';
}

function funDivide1(){
    operation = 'divide';
    if(flag == '1')
    {result = result / parseFloat(temp); }
    else{
        result = parseFloat(temp);
        flag = 1;
    }
    
    temp='';
}
function funtimes1(){
    operation = 'times';
    if(flag == '1')
    {result = result * parseFloat(temp); }
    else{
        result = parseFloat(temp);
        flag = 1;
    }
    
    temp='';
}
function fun12() {
    
    switch(operation) {
        case 'minus':
            result = result - parseFloat(temp); 
            document.getElementById('screen').innerHTML = result;
            temp='0';
          break;
        case 'plus':
            result = result + parseFloat(temp); 
            document.getElementById('screen').innerHTML = result;
             temp='0';
          break;
          case 'mod':
            result = result % parseFloat(temp); 
            document.getElementById('screen').innerHTML = result;
             temp='0';
          break;
          case 'divide':
            result = result / parseFloat(temp); 
            document.getElementById('screen').innerHTML = result;
             temp='0';
          break;
          case 'times':
            result = result * parseFloat(temp); 
            document.getElementById('screen').innerHTML = result;
             temp='0';
          break;
        default:
            result=0;
            document.getElementById('screen').innerHTML = result;
            temp='0';
      }
    
}