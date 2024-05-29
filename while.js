// All the exercises should use while loop:

// Please be sure to conect this file to another HTML file
// to seprate it from the recursion file

// Dont serach on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And dont look or use a code that you wrote before

//pretier alt shift F

console.log("Here is : While");

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/

function subtract(n) {
  let result = n;
  let i = n - 1;
  while (i >= 0) {
    result -= i;
    i--;
  }
  return result;
}

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/

function repeatStr(string, num) {
  let concat = string;
  let i = 0;
  while (i < num) {
    concat += +" ";
    i++;
  }

  return concat;
}

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

function sum2(num1, num2) {
  let sum = 0;
  let i = num1;
  while (i <= num2) {
    sum = sum + i;
    i++;
  }
  return sum;
}

/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
س(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/

function repeatStr2(string, string1) {
  let i = 0;
  concat = "";
  while (i < string1.length) {
    concat += string + " ";
    i++;
  }
  return concat;
}

/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
*س* Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

function multiOf(num1, num2, num3) {
  let result = num1;
  let count = 1;
  while (count < num3) {
    result *= num2;
    count++;
  }
  return result;
}

/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

function muti2(num1, num2) {
  let i = num1;
  let m = 1;
  while (i <= num2) {
    m = m * i;
    i++;
  }
  return m;
}

/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/

function numberBetweensUs(num1, num2) {
  let arr = [];
  let i = num1 + 1;
  while (i < num2) {
    arr.push(i);
    i++;
  }
  return arr;
}

/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/

function multiplication2(num1, num2) {
  return num1 * num2;
}

/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/

/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/

function repeatChar(string, char) {
  let i = 0;
  let count = 0;
  while (i < string.length) {
    if (string.charAt(i) === char) {
      count++;
    } else if (string.charAt(i).toUpperCase() === char) {
      count++;
    } else if (string.charAt(i).toLowerCase() === char) {
      count++;
    }
    i++;
  }
  return count;
}

// Advanced Part {for your benefits}

// Dont solve any question here if you didnt
//finish all the question a bove with your pair

// This part you can try it and solve solo not with your pair

// This part is extra (and there is no help from the trainer) it is good to try it

/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/

//for loop

function fibon(num) {
  if (num <= 1) {
    return 1;
  }

  let prev1 = 1;
  let prev2 = 1;
  let current = 0;

  for (let i = 2; i <= num; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}

//while loop
function fibon(num) {
  if (num <= 1) {
    return 1;
  }

  let prev1 = 1;
  let prev2 = 1;
  let current = 0;
  let i = 2;

  while (i <= num) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
    i++;
  }

  return current;
}

/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/

//for loop

function mirror(string) {
  let string2 = "";
  let p = string.length - 1;

  for (let i = 0; i < string.length; i++) {
    string2 += string.charAt(p);
    p--;
  }

  return string2;
}

//while loop

function mirror(string) {
  let string = "";
  let p = string.length - 1;

  while (i < string.length) {
    string += string.charAt(p);

    i++;
    p--;
  }
}

/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/

//for loop
function mirrorCaseAlso(string) {
  let string2 = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string2 += string[i].toLowerCase();
    } else if (string[i] === string[i].toLowerCase()) {
      string2 += string[i].toUpperCase();
    }
  }
  return string2;
}

//while loop
function mirrorCaseAlso(string) {
  let result = "";
  let i = string.length - 1;
  while (i >= 0) {
    if (string[i] === string[i].toUpperCase()) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
    i--;
  }
  return result;
}

/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/

function repeatChar2(string, char) {
  let count = 0;
  let i = 0;
  while (i < string.length) {
    if (string[i] === char) {
      count++;
    }

    i++;
  }

  return count;
}

/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her
Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
Ex: welcomeSayHello(7); =>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/

function HiSayHelloTo(n) {
  for (let i = 1; i <= n; i++) {
    let message = `hi ${i}`;
    if (i > 1) {
      message += " Now Pleas Say Hello To";
      for (let j = 1; j < i; j++) {
        message += ` ${j}`;
        if (j < i - 1) {
          message += ",";
        }
        if (j === i - 2) {
          message += " and";
        }
      }
    }
    console.log(message);
  }
}
