## reverse an array in place without using any built in function
To solve this problem I chose the two pointer approach.
Time Complexity: O(n)
Space complexity: O(1)

```javascript

let arr = [1,2,3, 4, 5]
if(arr.length <= 0) console.log(arr)

// 5, 2, 3, 4, 1 -> 1st iteration
// 5, 4, 3, 2, 1 -> 2nd iteration

for(let i=0, j=arr.length - 1; i < j; i++, j-- ){
    // [arr[i], arr[j]] = [arr[j], arr[i]] // sawapping can be done this way also
    let temp
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(arr)
```
## find the max and min elements in an array
Time Complexity: O(n)
Space complexity: O(1)
```javascript
let arr = [10,2,3, 4, 5]
if(arr.length <= 0) console.log(arr)

let min = arr[0], max = arr[0]
for(let i=0; i < arr.length; i++){
    if(arr[i] < min)
        min = arr[i]
    if(arr[i] > max)
        max = arr[i]
}
console.log(min, max)
```
## rotate an array to the right/left by k steps







## let arr = [2, 2, 5, 9, 10, 1, , 4, 4, 5]; // remove duplicate then sort it without using array methods

```javascript
// Step 1: Remove undefined values (if any)
let cleanArray: number[] = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== undefined) {
    cleanArray.push(arr[i]);
  }
}

// Step 2: Remove duplicates
let uniqueArray: number[] = [];
for (let i = 0; i < cleanArray.length; i++) {
  let exists = false;
  for (let j = 0; j < uniqueArray.length; j++) {
    if (cleanArray[i] === uniqueArray[j]) {
      exists = true;
      break;
    }
  }
  if (!exists) {
    uniqueArray.push(cleanArray[i]);
  }
}

// Step 3: Sort the array using a manual sorting algorithm (e.g., Bubble Sort)
for (let i = 0; i < uniqueArray.length - 1; i++) {
  for (let j = 0; j < uniqueArray.length - i - 1; j++) {
    if (uniqueArray[j] > uniqueArray[j + 1]) {
      // Swap elements
      let temp = uniqueArray[j];
      uniqueArray[j] = uniqueArray[j + 1];
      uniqueArray[j + 1] = temp;
    }
  }
}

console.log(uniqueArray); // Output: [1, 2, 4, 5, 9, 10]
```