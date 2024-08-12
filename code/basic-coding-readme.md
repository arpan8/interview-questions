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

