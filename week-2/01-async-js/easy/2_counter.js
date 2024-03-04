/**
 ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
->CREATED USING SETTIMEOUT 

 */

function createCounter(duration){
    console.log("Counter running");
    setTimeout(function(){
       console.log("Time out");
    },duration*1000);
}

createCounter(10);