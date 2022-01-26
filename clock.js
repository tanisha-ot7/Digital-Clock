

// for(var i=0;i<10;i++)
// { 
//     window.setInterval(function(){
//     document.getElementById("header").style.paddingLeft = "50px";
//     },1000)
// }




function zero(number) {
    if(number < 10){
       return"0" + number.toString();
    }
    else{
        return number;
    }
}

window.setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    document.getElementById("hour").innerHTML = zero(hours);
    document.getElementById("minute").innerHTML = zero(minutes);
    document.getElementById("second").innerHTML = zero(seconds);  
},1000)


