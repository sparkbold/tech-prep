## Two Sum problem

Prints all pair of integer values from given array whose sum is is equal to given number. complexity of this solution is O(n)

## Using hashtable

Using hashtable we can check if the hash contain the second value of the pair.

If the target is 9 and the the first number is 7, the other has to be 2 or -16. If the array doesn't have any negative number we don't have to check the negative value in the hash.

To iterate through an array the time complexity is N and to insert values in the hash by add() and contains() are both O(1) operation in a hashtable. So the total time complexity is O(N)

```JavaScript
function twoSum(nums, target) {
  let numbers = [];
  if (nums.length < 1) {
    return;
  }
  for ( value of nums) {
    let n = target - value;
    if (nums.includes(n)) {
      numbers[0] = value;
      numbers[1] = n;
    }
  }
}
```
