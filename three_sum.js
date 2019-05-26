// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.

function threeSum(nums){
  let res = [];
  nums.sort(function(a, b) {
    return(a - b)
  });
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === nums[i - 1]){
      continue
    };
    let staticValue = nums[i];
    let rightPointer = nums.length-1;
    let leftPointer = i+1;
    while(leftPointer < rightPointer){
      if(staticValue + nums[rightPointer] + nums[leftPointer] === 0){
        res.push([staticValue, nums[rightPointer], nums[leftPointer]]);
        while(nums[leftPointer] === nums[leftPointer+1]){
          leftPointer++
        }
        while(nums[rightPointer] === nums[rightPointer-1]){
          rightPointer--
        }

        rightPointer--
        leftPointer++
      }
      if (nums[rightPointer] + nums[leftPointer] < staticValue) {
        while(nums[leftPointer] === nums[leftPointer+1]){
          leftPointer++
        }
        leftPointer++
      }
      else{
        while(nums[rightPointer] === nums[rightPointer-1]){
          rightPointer--
        }
        rightPointer--
      }
    }
  };
  return res;
};
threeSum([-4, -1 ,-1 ,0, 1, 2])

//do with recursion
