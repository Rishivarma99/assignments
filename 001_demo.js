
// let string1 = "rishi!";


// const regrex = /[^a-zA-Z0-9]/ ;  // regular exp to check 

// //   if(regrex.test(string1)==true ){
// //     return false ;
// //   }

// console.log(regrex.test(string1));
// console.log(string1.split("").sort().join(""));

const transaction = [
    {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: "food",
		itemName: 'Pizza',
	},
    {
		id: 2,
		timestamp: 1656076800000,
		price: 20,
		category: 'cloth',
		itemName: 'Pizza1',
	},
    {
		id: 3,
		timestamp: 1656076800000,
		price: 30,
		category: "food",
		itemName: 'Pizza1',
	}
]

function checkcat(ans,cat){
   return  ans.findIndex( (item) => item.category === cat);
}
function add(ans,idx,cat,price1){
    if(idx==-1){ // not present in ans    
        let obj1 = {
            category : cat ,
            moneySpent : price1 
        }
        ans.push(obj1);
    }
    else{
        ans[idx].moneySpent += price1 ;  
    }
}

   const ans  = [] ;
   transaction.forEach( (item)=>
   { 
   let cat =  item.category ; 
   let catIndex = checkcat(ans,cat);
   add(ans,catIndex,cat,item.price);
   }
   )
   console.log(ans);
     
     

 