/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
!! 輸出數組中兩個整數元素和為target的索引
*/


// O(n^2) 基本遍歷 183ms 42.3MB
let twoSum = function(nums , target){
  let sum = null
  for(let i = 0 ; i <= nums.length ; i++) {
    for(let j = i+1 ; j < nums.length ; j++) {
      sum = nums[i] + nums[j]
      if(sum == target) {
        return [i, j]
      }
    }
  }
  return '無解'
}
console.log(twoSum([4,3,9,2,40,8,1,20,32], 60));


// O(n) ES6 Map物件 77ms 43.5MB
let twoSum2 = function(nums, target) {
  let map = new Map     // 1. 目前map內沒有值
  for(let i = 0 ; i < nums.length ; i++) {

    if(map.has(target - nums[i])) {         // 2. 第一次判斷必為false 
      return [map.get(target - nums[i]), i] // 4. 當 (target-num[i]) 的值被放入過map中作為key時, (該key+num[i]) = target 
    } // 返回 [該key對應的value(原數組的index), 當前循環的i(index)]
    
    map.set(nums[i], i)         // 3. 將value和index放入map
  }
  return '無解'
}
console.log(twoSum2([10,3,7,5,9,30,42,43,49,23,15,12,13,14],20));


// O(n) 物件 56ms 42.9MB
let twoSum3 = function(nums, target) {
  let obj = {}
  for(let i = 0 ; i < nums.length ; i++) {
    if(obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i]
    }
    obj[nums[i]] = i
  }
  return '無解'
}
console.log(twoSum3([3,2,4,5,0,9,30,19,3,24,39,2,11,98,8], 20));


// indexOf 432ms 42.1MB
let twoSum4 = function(nums, target) {
  for(let i = 1 ; i<nums.length ; i++) {
    if(nums.indexOf(target - nums[i]) == 0 || nums.indexOf(target - nums[i]) > 0) {
      if(nums.indexOf(target - nums[i]) !== i) {
        return [nums.indexOf(target - nums[i]), i]
      }
    }
  }
  return '無解'
}
console.log(twoSum4([1,2,3,4,5], 4));