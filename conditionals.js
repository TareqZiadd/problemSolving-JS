    /* 1. Write a JavaScript program that accept two integers and
    * display the larger.Go to the editor */
    /******* Start Your Code *********/
    
    function display(num1, num2) {
        if (num1 > num2) {
            alert(num1);
        } else if (num2 > num1) {
            alert(num2);
        } else {
            alert("The numbers are equal: " + num1);
        }
    }




    /******* End Your Code ********* */

    /* 2. Write a JavaScript conditional statement to find the sign
    of product of three numbers. Display an alert box with the 
    specified sign. Go to the editor 
    Sample numbers : 3, -7, 2 
    Output : The sign is - */
    /******* Start Your Code *********/
    


    function findSign(num1, num2, num3) {
        let product = num1 * num2 * num3;
        if (product > 0) {
            alert("The sign is +");
        } else if (product < 0) {
            alert("The sign is -");
        } else {
            alert("The product is 0, no sign");
        }
    }




    /******* End Your Code ********* */

    /* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
    Sample numbers : 0, -1, 4 
    Output : 4, 0, -1 */
    /******* Start Your Code *********/
    
    /******* End Your Code ********* */


    function sortNumber (num1,num2,num3){
    let arr=[num1,num2,num3];
    alert(arr.sort((a, b) => b - a));
    }



    /*4. Write a JavaScript conditional statement to find the largest of five numbers. 
    Display an alert box to show the result. Go to the editor 
    Sample numbers : -5, -2, -6, 0, -1 
    Output : 0 */

    /******* Start Your Code *********/

    function largestNumber (num1,num2,num3,num4,num5){

    let arr = [num1,num2,num3,num4,num5];
    let largestNumber = arr[0];

    for (let i =0;i<arr.length;i++){
        if (largestNumber<arr[i]){
            largestNumber = arr[i];
        }
    }
    alert(largestNumber);
    }


    /******* End Your Code ********* */

    /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
    /******* Start Your Code *********/
    function isGreaterThan (x,y){
        if (x>y){
    alert("hello World");
        }else{
    alert ("Goodbye");
        }
    }



    /******* End Your Code ********* */



