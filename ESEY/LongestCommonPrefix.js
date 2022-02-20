/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
!! 查找由字串組成的元素數組共同的最長前綴
*/


// 暴力解 122ms 42.2MB
let longestCommonPrefix = function(strs) {
  let prefix = ''
  let shortElement = Math.min(...strs.map(str => str.length)) // 展開運算符 + map獲得字串元素的長度 返回最小的長度
  for(let i = 0 ; i < shortElement ; i++) {
    let char = strs[0][i]
    if(strs.every(str => str[i] === char)) {
      prefix = prefix + char
    } else {
      return prefix
    }
  }
  // 多寫一個return 避免數組中有元素的長度為0 發生不進入迴圈的問題
  // 若這不寫return 迴圈也不進入 則會輸出undefined
  return prefix
}
console.log(longestCommonPrefix(['']))