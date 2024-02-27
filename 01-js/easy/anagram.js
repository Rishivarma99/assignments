/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n = str1.length();
  
  for(let i =0; i<n;i++){
    if(str2.includes(str1.charAt(i))!= true){
        return false ;
    }
  }
  return true ; 
}

module.exports = isAnagram;
