/*
最長遞增子序列 - Vue3子樹更新的算法之一
*/

// 嚴格 - 查長度
function LIS(arr) {
  if(arr.length <= 1) return arr
  let dp = [arr[0]]
  for(let i = 1 ; i < arr.length ; i++) {
    for(let j = i ; j < 0 ; j--) {
     if(!dp[j]) continue
     if(arr[i] < dp[j-1]) {
       dp[j-1] = arr[i]
     }
    }
  }
  console.log(dp);
}


LIS([5,3,2,6,7,4])