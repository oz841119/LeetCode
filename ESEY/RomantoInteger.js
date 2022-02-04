/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
!! 將羅馬數字轉為整數
*/

// 加法 312ms 54.1MB
let romanToInt = function(s) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let num = 0
  for(let i = 0 ; i < s.length ; i++) {
    if(romanSymbols[s[i]] < romanSymbols[s[i+1]]) {
      num = num + romanSymbols[s[i+1]] - romanSymbols[s[i]]
      i++
    } else {
      num = num +romanSymbols[s[i]]
    }
  }
  return num
}

console.log(romanToInt("MCMXCIV"));


// 減法 104ms 47.5MB
let romanToInt2 = function(s) {
  const romanSymbols = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  let num = 0
  let curr = 0
  let next = 0 
  for(let i = 0 ; i < s.length ; i++) {
    curr = romanSymbols[s[i]]
    next = romanSymbols[s[i+1]] 
    curr < next ? num -= curr : num += curr
  }
  return num
}