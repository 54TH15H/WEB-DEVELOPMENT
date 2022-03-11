// var arr = ['b1','b2','b3','b4','b5'];
// var level = 2;
// var tempArr = [];
// var fun3Val = 0;
// var score = 0;
// var hscore = 0;
// var temp3 = 0;

// function fun1(){
//     document.getElementById('btn').disabled = true;
//     tempArr = [];
//     for(let i=0;i<level;i++){
//         setTimeout(chColor,500);
//     }
//     // level += 1;
//     temp3 = level;
//     console.log(tempArr);
// }

// function chColor(){
//     var index = Math.floor((Math.random() * 6));
//     document.getElementById(arr[index]).style.backgroundColor = 'blue';
//     tempArr[tempArr.length] = arr[index];
//     setTimeout(() => {
//         fun2();
//     }, 500);
// }
// function fun2(){
//     for(let i=0;i<arr.length;i++)
//         document.getElementById(arr[i]).style.backgroundColor = 'lightGray';
// }
// function fun3(temp){
//     temp3 -= 1;
//     if(document.getElementById('btn').disabled === false)
//         return
//     if(tempArr[fun3Val] !== temp){
//         document.getElementById(temp).style.backgroundColor = 'red';
//         setTimeout(() => {
//             fun2();
//         }, 500);

//         tempArr = [];
//         score = 0;
//         document.getElementById('btn').disabled = false;
//         document.getElementById('score').innerHTML = score;
//         fun3Val = 0;
//     }
//     else{
//         fun3Val += 1;
//     }
//     if(tempArr[tempArr.length-1] === temp && temp3 === 0){
//         score += 1;
//         document.getElementById('btn').disabled = false;
//         if(hscore < score)
//             hscore = score;
//         document.getElementById('score').innerHTML = score;
//         document.getElementById('hscore').innerHTML = hscore;
//         tempArr = [];
//         fun3Val = 0;
//     }   

// }

// var inter;
// function fun10(){
//     inter = setInterval(() => {
//         main();
//     }, 500);
// }

// function main(){
//     document.getElementById('num').innerHTML = parnum++;
//     if(parnum === 5){
//         stop();
//     }
// }
// function stop(){
//     clearInterval(inter);
// }

var arr = ['b1','b2','b3','b4','b5'];
var level = 2;
var tempArr = [];
var fun3Val = 0;
var score = 0;
var hscore = 0;
var temp3 = 0;
var inter;
var templevel;
function stop(){
    clearInterval(inter);
}
function fun1(){
    document.getElementById('btn').disabled = true;
    tempArr = [];
    templevel = level;
    inter = setInterval(() => {
        chColor();
    }, 1000);
    // level += 1;
    temp3 = level;
    console.log(tempArr);
}

function chColor(){
    templevel -= 1;
    var index = Math.floor((Math.random() * 6));
    document.getElementById(arr[index]).style.backgroundColor = 'blue';
    tempArr[tempArr.length] = arr[index];
    setTimeout(() => {
        fun2();
    }, 100);
    if(templevel === 0){
        stop();
    }
}
function fun2(){
    for(let i=0;i<arr.length;i++)
        document.getElementById(arr[i]).style.backgroundColor = 'lightGray';
}
function fun3(temp){
    temp3 -= 1;
    if(document.getElementById('btn').disabled === false)
        return
    if(tempArr[fun3Val] !== temp){
        document.getElementById(temp).style.backgroundColor = 'red';
        setTimeout(() => {
            fun2();
        }, 100);

        tempArr = [];
        score = 0;
        document.getElementById('btn').disabled = false;
        document.getElementById('score').innerHTML = score;
        fun3Val = 0;
    }
    else{
        fun3Val += 1;
    }
    if(tempArr[tempArr.length-1] === temp && temp3 === 0){
        score += 1;
        document.getElementById('btn').disabled = false;
        if(hscore < score)
            hscore = score;
        document.getElementById('score').innerHTML = score;
        document.getElementById('hscore').innerHTML = hscore;
        tempArr = [];
        fun3Val = 0;
    }   
}