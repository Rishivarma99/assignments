/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/* 
IMP : 
-> STRICT : A string with special characters can never be a anagram as on rearranging we cant get a meaningfull words 
-> HERE IT IS FLEXIBLE ANAGRAM TEST 
->HERE ANAGRAMS IS FLEXIBLE NOT A STRICT
->STRICT : ONLY ALLOWEDE WITH LETTERS ANY OTHER WILL NOT BE COSIDESRED AS ANAGRAM
-> HERE ALL CHAREACTERS ARE CONSIDERED AND CHECKED NOTHING IS DISCARDED  
*/

function isAnagram(str1, str2) {
 
  // NO NEED TO CHECK FOR SPECIAL CHARACTER S  
  // NOW JUST CHECK FOR ANAGRAM 
  // BEST WAY : INTIALLY SORT THE STRINGS IN ALPHABETICAL ORDER 
  
  const Change = (str) => str.toLowerCase();
  let st1 = Change(str1).split("").sort().join("") ; 
  let st2 = Change(str2).split("").sort().join("") ; 
  return st1==st2  ;
}
module.exports = isAnagram;

// NO NEED 

// if there is a special character in any of one str then return false 
// const regrex = /[^a-zA-Z0-9\s]/ ;  // regular exp to check 
// if(regrex.test(str1)==true || regrex.test(str2)==true){
//   return false ;
// }