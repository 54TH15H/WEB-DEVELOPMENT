function final(){
    
    document.getElementById("op").style.backgroundColor="rgb("+parseInt(document.getElementById("r").value)+","+parseInt(document.getElementById("g").value)+","+parseInt(document.getElementById("b").value)+")";

    document.getElementById("output").innerHTML="OUTPUT : RGB("+document.getElementById("r").value+" , "+document.getElementById("g").value+" , "+document.getElementById("b").value+")"
}
var parnum = 0;
var inter;
function fun10(){
    inter = setInterval(() => {
        main();
    }, 500);
}

function main(){
    document.getElementById('num').innerHTML = parnum++;
    if(parnum === 5){
        stop();
    }
}
function stop(){
    clearInterval(inter);
}