//given in arr "nums", find the contiguous subarray (containing at least one number) which has the larges sum and
//return its sum

function maxSubArr(nums){
  let max = nums[0];
  let currentMax = nums[0];
  for(let i = 1; i < nums.length; i ++){
    if(nums[i] > currentMax + nums[i]){
      currentMax = nums[i];
    }
    else{
      currentMax = nums[i] + currentMax;
    }
    if(currentMax > max){
      max = currentMax;
    }
  }
  return max;
};
maxSubArr([-2,1,-3,4,-1,2,1,-5,4])
