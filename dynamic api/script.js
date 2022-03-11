var link1 = "https://restcountries.com/v2/all";
var link2 = "https://restcountries.com/v2/name/aruba?fullText=true";
var i = 0;
var par1 = document.getElementById('par1');
var par2 = document.getElementById('par2');
var input = document.getElementById('inp');
var btn = document.querySelector('button');
btn.addEventListener('click',fun);
par1.innerHTML = link1;

//optional code
input.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });

var l1 = "https://restcountries.com/v2/name/";
var l2 = "?fullText=true";

//optional function
// function country(inp){
//     let result = '';
//     for(let i=0;i<inp.length;i++){
//         if(inp[i] !== ' '){
//             result += inp[i];
//         }
//         else{
//             result += '%20';
//         }
//     }
//     return result;
// }
function fun(){
    if(input.value === ''){
        par1.innerHTML = link1;
        par2.innerHTML = '';
    }
    else{
        par2.innerHTML = '';
        par1.innerHTML = l1+input.value+l2;
        var request = new XMLHttpRequest();
request.open('GET', l1+input.value+l2, true);
request.onload = function () {
    var data = JSON.parse(this.response);

    par2.innerHTML = "Currency : "+data[0]['currencies'][0]['name']+" ["+data[0]['currencies'][0]['code']+"] "+"<br/>"+"Flag : "+data[0]['flag'];
    }

    request.send();
    }
}