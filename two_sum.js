//given a sorted array of ints, return indices of the two numbers such that they add up to
//a specific target. You may assum that each input would have exactly one solution, and
//you may not use the same element twice

function twoSum(nums, target){
  let leftPointer = 0;
  let rightPointer = nums.length-1;
  while(leftPointer < rightPointer){
    if(nums[leftPointer] + nums[rightPointer] === target){
      return [leftPointer, rightPointer];
    }
    if(nums[leftPointer] + nums[rightPointer] < target){
      leftPointer++
      continue;
    }
    if(nums[leftPointer] + nums[rightPointer] > target){
      rightPointer--
      continue;
    }
    return nums
  }
}
twoSum([2,7,11,15], 9)
