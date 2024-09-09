# pattern programming

## *
## **
## ***
## ****
## *****

## Answer
```javascript
for (let i=1; i<=5; i++){
    let str =''
    for(let j=1; j<=i; j++){
        str +='*'
    }
    console.log(str)
}
```
## *****
## ****
## ***
## **
## *

## Answer
```javascript
for (let i=5; i>=1; i--){
    let str =''
    for(let j=1; j<=i; j++){
        str +='*'
    }
    console.log(str)
}
```
## - - - - * 
## - - - * * 
## - - * * * 
## - * * * * 
## * * * * *

## Answer
```javascript
for (let i=1; i<=5; i++){
    let space ='', str = ''
    for(let k = 5 -i; k >= 1; k--){
        space +=' ' 
    }
    for(let j=1; j<=i; j++){
        str += '*'
    }
    console.log(space+str)
}
```
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
