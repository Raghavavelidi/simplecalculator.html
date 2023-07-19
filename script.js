function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer1").innerHTML="Addition is "+c;
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    if(a>b){
    let c=a-b;}
    else{
    c=b-a;}
    document.getElementById("answer1").innerHTML="substraction is "+c;
}
function mul(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("answer1").innerHTML="multiplication is "+c;
}
function div(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    if(a>b){
    let c=a/b;}
    else
    c=b/a;
    document.getElementById("answer1").innerHTML="division is "+c;
}