/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    
    let n = str.length; 
    str = str.toLowerCase();
    let ans =0 ;
    for(let i=0;i<n;i++){
      let ch = str[i];
      if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ){
        ans++;
      }
    }
    return ans ; 
}


module.exports = countVowels;