


/*
1
Correct the syntax error
 [ 1,7,9,45 ]

 ["Str","alex","moh"]

 ['the','fox','over','lazy','dog']

*/



done
----------------------------------------------------------------------------------------------------

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/

the index of bannana is : 1
the index of tomato is  : 0

----------------------------------------------------------------------------------------------------

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

const favoriteFoods = [
    "French Fries", 
    "Fish",
    "Shawarma",
    "Broasted Chicken",
    "Mushroom Soup"
  ];
  
  const favoriteSports = [
    "Football",
    "Tennis",
    "Wrestling"
  ];
  
  const favoriteMovies = [
    "Batman", 
    "Terminator 2: Judgment Day", 
    "The Twilight Saga" 
  ];

  ----------------------------------------------------------------------------------------------------

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/


function firstOfArray(array){
return array[0];
}

----------------------------------------------------------------------------------------------------

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(array){
return array[array.length - 1];
}
----------------------------------------------------------------------------------------------------

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
//unshift -- adding to the beginning of the array
//shift --  removing the first ekement from the array
//pop ---  Removing thw last element from the array


*/
var array = [0,5,7,9];
console.log(array);
array.push(10); 
console.log(array);

array.unshift(1); 
console.log(array);

array.shift(); 
console.log(array);

array.pop(); 
console.log(array);


----------------------------------------------------------------------------------------------------

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];
console.log(array2);

array2.push(1);
console.log(array2);

array2.unshift(2);
console.log(array2);

array2.shift();
console.log(array2);

array2.pop();
console.log(array2);




----------------------------------------------------------------------------------------------------

/*

8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


function middleOfArray(arr1) {
    let arr2 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i === (arr1.length - 1) / 2 || i === arr1.length / 2) {
            arr2.push(arr1[i]);
        }
    }

    return arr2;
}


----------------------------------------------------------------------------------------------------

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']; 


animals[0] = 'zebra'; 
animals[1] = 'elephant'; 

console.log(animals);                 // ['zebra', 'elephant', 'bird']

var nums = [1, 2, 3, 8, 9]; 


nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5; 
nums[3] = 44;
nums[4] = 98; 
nums[5] = 44; 

console.log(nums);            // [5, -22, 3.5, 44, 98, 44]



----------------------------------------------------------------------------------------------------

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(array,index){

 return  array[index];
}




----------------------------------------------------------------------------------------------------

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


function arrayExceptLast(array){

array.pop();
return array;

}


----------------------------------------------------------------------------------------------------

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/


function addToEnd (array,value){

array[array.length-1]=value;
    return array;
}


----------------------------------------------------------------------------------------------------

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//For

function sumArray (arr){
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

return sum;

}


//While

function summArray (arr){
let i =0;
let sum = 0;
while (arr.length>i){
    sum+=arr[i];
    i++
}

return sum;

}


----------------------------------------------------------------------------------------------------

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/




//for loop
function minInArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


//while loop
function minInArray (arr){
let i = 0;
let min=arr[0];
while(arr.length>i){
    if(arr[i]<min){
        min = arr[i];
    }
    i++
}
return min
}


----------------------------------------------------------------------------------------------------

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


//for loop

function removeFromArray(arr,element){
    for (i=0;i<arr.length;i++){
        if (arr[i]==element){
    arr.splice(i,1);
    break;
    }}
    return arr;
    }


//while loop

function removeFromArray(arr,element){
let i=0;

while (arr.length>i){
if (arr[i]===element){
    arr.splice(i,1);
    break;
}
i++
}
return arr;
}


----------------------------------------------------------------------------------------------------

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop
function oddArray (array){

let arr2=[];

for (let i = 0 ;i<array.length;i++){
    if (array[i]%2!==0){
        arr2.push(array[i]);
    }
}
return arr2;

}


//while loop
function oddArray (arr){

let i=0;
let arr2=[];
while (i<arr.length){
if (arr[i]%2!==0){
    arr2.push(arr[i]);
}
i++
}
return arr2;  
}


----------------------------------------------------------------------------------------------------

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

    //for loop

    function aveArray (array){
    let sum=0;
    let count=0;
    for (let i = 0 ; i<array.length;i++){

    sum+=array[i];

        count++;
    }


        return sum/count;
    }

    //while 


    function aveArray (array){

        let i=0;
        let sum=0
        let count= 0 ;
        while(i<array.length){
            sum +=array[i]

            count++;
            i++;
        }

        return sum/count;
    }


    ----------------------------------------------------------------------------------------------------

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



//loop

function shorterInArray(arr) {
    let lengthOfIndex = arr[0].length;
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < lengthOfIndex) {
            lengthOfIndex = arr[i].length;
            string = arr[i];
        }
    }
    return string;
}


//while

function shorterInArray(arr) {

    let lengthOfIndex=arr[0].length;
    let string="";
    let i=0;
    while(arr.length>i){

if(arr[i].length<lengthOfIndex){
lengthOfIndex=arr[i].length;
 string = arr[i];  
}

  i++
    }

    return string;
}




----------------------------------------------------------------------------------------------------

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/




// for loop


function repeatChar (string,char){
    let count=0;
for(let i =0;i<string.length;i++){
    if(string.charAt(i)===char){
    count++;
    }
}
    return count;
}



//while loop

function repeatChar (string,char){
let i = 0 ;
let count  = 0 ;
while (string.length>i){
    if(string.charAt(i)===char){
        count++;
    }
    i++;
}
  return count;  
}



----------------------------------------------------------------------------------------------------

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



//For loop 

function evenIndexOddLength(array) {
    var result = [];
    for (var i = 0; i < array.length; i += 2) {
        if (array[i].length % 2 !== 0) {
            result.push(array[i]);
        }
    }
    return result;
}

//while loop


function evenIndexOddLength(array) {
    var result = [];
    var i = 0;
    while (i < array.length) {
        if (i % 2 === 0 && array[i].length % 2 !== 0) {
            result.push(array[i]);
        }
        i++;
    }
    return result;
}


----------------------------------------------------------------------------------------------------

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self

// العنصر ضرب نفسه بمقدار الانديكس 

*/



//for loop

function powerElementIndex(nums){
let arr=[];

for (let i=0;i<nums.length;i++){
arr[i]=Math.pow(nums[i],i);
}

return arr;
}



//while loop

function powerElementIndex(nums){

    let arr=[];
    let i=0;
    while(i<nums.length){
        arr[i]=Math.pow(nums[i],i);
    i++
    }

return arr;

}


----------------------------------------------------------------------------------------------------

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
// جملة الشرط بس بتاخد الانديكس مع الزوجي مع العنصر الزوجي ثم بنضيفهم عآخر الاراي

*/


// for loop

function evenNumberEvenIndex(nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0 && nums[i] % 2 == 0) {
            arr.push(nums[i]);
        }
    }

    return arr;
}

//while loop 

function evenNumberEvenIndex(nums) {

let i =0;
let arr=[];

while (i<nums.length){

if (i%2==0 && nums[i]%2==0){
    arr.push(nums[i]);
}

i++;
}


return arr;
}




