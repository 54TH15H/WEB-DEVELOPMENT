// var values = [["00","01","02","03","04","05","06","07"],["10","11","12","13","14","15","16","17"],["20","21","22","23","24","25","26","27"],["30","31","32","33","34","35","36","37"],["40","41","42","43","44","45","46","47"],["50","51","52","53","54","55","56","57"],["60","61","62","63","64","65","66","67"],["70","71","72","73","74","75","76","77"]];

// var posTemp = 0;

// for(var i=0;i<8;i++){
//     for(var j=0;j<8;j++){
//         let temp = values[i][j];
//         document.getElementById(temp).addEventListener("click",bsol);
//     }
// }
// function clear(){
//     for(var i=0;i<8;i++){
//         for(var j=0;j<8;j++){
//             let temp = document.getElementById(values[i][j]);
//             if(temp.getAttribute("src") === "images/pos.svg")
//                 temp.src = "images/e.svg";
//         }
//     }
// }

// function disp(a){
//     if(posTemp === 0){
//         for(var i=0;i<a.length;i++){
//             document.getElementById(a[i]).src="images/pos.svg";
//         }
//         posTemp+=1;
//     }
//     else{
//         posTemp-=1;
//         clear();
//     }
// }

const boxeven = document.querySelectorAll('.boxeven');
const boxodd = document.querySelectorAll('.boxodd');
for(var even of boxeven){
    even.addEventListener('mouseover',mouseOver);
    even.addEventListener('mouseleave',mouseLeave);
}
for(var odd of boxodd){
    odd.addEventListener('mouseover',mouseOver);
    odd.addEventListener('mouseleave',mouseLeave);
}
// function mouseOver(){
//     this.className += ' hovered';
// }
// function mouseLeave(){
//     if(this.className.indexOf('boxeven') === 0){
//         this.className = 'boxeven';
//     }
//     if(this.className.indexOf('boxodd') === 0){
//         this.className = 'boxodd';
//     }
// }
