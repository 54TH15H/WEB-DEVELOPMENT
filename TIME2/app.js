var total = ['t','tl','tr','m','bl','br','b'];

var arr = [['t','tl','tr','bl','br','b'], ['tl','bl'], ['t','tr','m','bl','b'], ['t','tr','m','br','b'], ['tl','tr','m','br'], ['t','tl','m','br','b'], ['t','tl','m','bl','br','b'], ['t','tr','br'], ['t','tl','tr','m','bl','br','b'], ['t','tl','tr','m','br','b']];

var t1 = "AM";
var t2 = "PM";
var temp = "";
function getTime(){
    var d = new Date();
    var presentHours = d.getHours();
    var presentMinutes = d.getMinutes();
    var presentSeconds = d.getSeconds();
    if (presentHours > 12){
        presentHours -= 12;
        temp = t2;
    }
    else
        temp = t1;

    presentHours = ""+presentHours;
    presentMinutes = ""+presentMinutes;
    presentSeconds = ""+presentSeconds;
    if (presentHours.length == 1)
        presentHours = "0"+presentHours;
    if (presentMinutes.length == 1)
        presentMinutes = "0"+presentMinutes;
    if (presentSeconds.length == 1)
        presentSeconds = "0"+presentSeconds;
    document.getElementById('time').innerHTML = presentHours+' : '+presentMinutes+' : '+presentSeconds+" "+temp;
    
    var ph1 = parseInt(presentHours[0]);
    var ph2 = parseInt(presentHours[1]);
    var pm1 = parseInt(presentMinutes[0]);
    var pm2 = parseInt(presentMinutes[1]);
    var ps1 = parseInt(presentSeconds[0]);
    var ps2 = parseInt(presentSeconds[1]);
    
    var temp2 = [ph1,ph2,pm1,pm2,ps1,ps2];
    var temp1 = ''
    for(i=1;i<7;i++)
        for(j=0;j<7;j++){
            temp1 = 't'+String(i)+total[j];
            document.getElementById(temp1).classList = 'cin '+'i';
        }
        
    for(i=1;i<7;i++)
        for(j=0;j<arr[temp2[i-1]].length;j++){
            temp1 = 't'+String(i)+arr[temp2[i-1]][j];
            document.getElementById(temp1).classList = 'cin '+arr[temp2[i-1]][j];
        }
    setTimeout(getTime,1000);
}
getTime()