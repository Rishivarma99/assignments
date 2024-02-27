/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
  IMP : 
  -> <ARR>.findIndex(); to get the index after satifying some condition 
*/

function checkcat(ans,cat){
  // FIND INDEX METHOD IMP 
  return  ans.findIndex( (item) => item.category === cat);
}
function add(ans,idx,cat,price1){
    if(idx==-1){ // not present in ans    
        let obj1 = {
            category : cat ,
            totalSpent : price1 
        }
        ans.push(obj1);
    }
    else{
        ans[idx].totalSpent += price1 ;  
    }
}
function calculateTotalSpentByCategory(transactions) {
    const ans  = [] ;
    // TRAVERSE TRASACTION AND ADD THE CREATE CATEGORY SPECIFIED OBJECTS AND ALSO ADD TOTAL SPENT 
    transactions.forEach( (item)=>
    { 
    let cat =  item.category ;
    // CHECK FUNC RETURN THE IDX OF A CATEGORY IN THE ANS ARRAY  
    let catIndex = checkcat(ans,cat);
    // ADD FUNCTION UPDATES THE TOTAL MONEY SPENT IN ANS 
    add(ans,catIndex,cat,item.price);
    }
    )
    // console.log(ans);
    return ans ; 
}

module.exports = calculateTotalSpentByCategory;
