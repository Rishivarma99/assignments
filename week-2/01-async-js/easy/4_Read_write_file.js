/**
 ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
 */



// const fs = require("fs");

// console.log("Program Start : ");
     
//     var data  = " curently in btch ";
//     // IMPORTANT TO WRITE THE FILE 
//      fs.writeFile("a.txt",data,"utf-8",{flag : 'a'},function(err){
//         if (err) {
//             console.error("Error writing file:", err);
//             return;
//           }
//           else{
//             console.log("suc");
//           }
        
//         // fs.readFile("a.txt","utf-8" , function(err,data){
//         //     console.log(data);
//         // })  

//      })

// console.log("File read Started");

// console.log("Other works");
// // let ans =0 ;
// // for(let i =0 ;i<10 ;i++){
// // ans = ans + i ;
// // }
// // console.log(ans);


let fs = require("fs");

let data = "This sentence will be written to the file";

fs.writeFile("a.txt", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("Contents after writeFile:\n");
    
    fs.readFileSync("a.txt","utf-8",function(err,data){
      console.log(data);
    })
  }
});