// DONE : USING REPLACE (/\s/g , " ")

const fs =  require("fs");


fs.readFile("a.txt","utf-8",function (err,data){
    
    
        const data1 = data.trim().replace(/\s+/g," ");
        console.log(data1); 

    
})

