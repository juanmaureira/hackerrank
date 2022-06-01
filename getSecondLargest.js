const getSecondLargest = (nums) => [ ... new Set(nums)].sort((a,b) => b-a)[1]

console.log(getSecondLargest([2, 3, 6, 6, 5]))

