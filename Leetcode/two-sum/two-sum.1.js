/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
// Question to ask to further clarify the question
1 .Does array contains only positive or negative numbers?
2. What if the same pair repeats twice, should we print it every time?
3. Is reverse of pair is acceptable e.g. can we print both (4,1) and (1,4) if given sum is 5.
4. Do we need to print only distinct pair? does (3, 3) is a valid pair forgiven sum of 6?
5. How big the array is?


Read more: https://javarevisited.blogspot.com/2014/08/how-to-find-all-pairs-in-array-of-integers-whose-sum-equal-given-number-java.html#ixzz5ijeqXm7d

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numbers = [];
  if (nums.length < 1) {
    return;
  }
  for (value of nums) {
    let n = target - value;
    if (nums.includes(n)) {
      numbers[0] = value;
      numbers[1] = n;
      console.log(numbers);
    }
  }
};
twoSum([2, 7, 11, 15], 9);
