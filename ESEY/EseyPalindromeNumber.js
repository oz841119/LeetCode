/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
!! 傳入一個數字 如果為回文數的話則返回該true 否則為false
*/


// 暴力解 309ms 50.6MB
let isPalindrome = function(x) {
  // 引用類型即使地址值一樣 但地址不同仍不會相等 所以用join做數組拼接後判斷
  return x.toString() === x.toString().split("").reverse().join("");
};
console.log(isPalindrome(854458));

// 檢查第一個索引和最後一個索引 377ms 51.3MB
let isPalindrome2 = function(x) {
  let arr = x.toString().split('')
  while(arr.length > 1) {
    if(arr.shift() !== arr.pop()) {  // shift具有O(n^2)的複雜度
      return false
    }
  }
  return true
}
console.log(isPalindrome2(39193))

