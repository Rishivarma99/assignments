
/**
 ## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

 */

function createCounter(time){
     let  i =time ;
   const intervalId =  setInterval( ()=>{
    console.clear();
       console.log("Countdown : " + i);
       i--;
        if(i==0){
         console.clear();
         console.log("timeout");
            clearInterval(intervalId);
        }
    },1000)
}
function promisifiedCounter(time){

    const p = new Promise(function(resolve){
   
        let  i =time ;
        const intervalId =  setInterval( ()=>{
         console.clear();
            console.log("Countdown : " + i);
            i--;
             if(i==0){
              console.clear();
            //   console.log("timeout");
                 clearInterval(intervalId);
                 resolve();
             }
         },1000)

        //  if(time!='a'){
        //     reject();
        //  }
   
    }) ; 
    return p ;

}


// createCounter(30);

const ans = promisifiedCounter(30);
ans.then( function(){
    console.log("time Out");
})
