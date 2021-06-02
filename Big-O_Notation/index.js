// Timing Our Code:
/**
 Suppose we want to write a function that calculates the sum of all numbers from 1 up to
 (and including) some number n
 */

//  Solution 1::
 function firstAddUpTo(n) {
     let total = 0;
     for (let i = 1; i <= n; i++) {
        total += i;
     }
     return total;
 };



 /**
For the firstAddUpTo code above, this is how the loop in it works when it receives an argument of 6::
    when:   i = 1, total = 1    [i.e total which is 0, plus i which is 1]
            i = 2, total = 3    [i.e total which is 1, plus i which is 2, total is now 3]
            i = 3, total = 6    [i.e total which is 3, plus i which is 3, total is now 6]
            i = 4, total = 10   [i.e total which is 6, plus i which is 4, total is now 10]
            i = 5, total = 15   [i.e total which is 10, plus i which is 5, total is now 15]
            i = 6, total = 21   [i.e total which is 15, plus i which is 6, total is now 21]
    Therefore: total is now 21
  */

// Solution 2::
// This uses a mathematical formula [addUpTo = n * (n+1)]
function secondAddUpTo(n) {
    return n * (n + 1) / 2;
};


/**TITMING OUR CODE
 * To determin the FASTEST code in terms of execution, we would make use of JS built in timer 
 * function:
 */
// DETERMINING THE TIME IT TAKES THE FIRST CODE TO CALCULATE THE SUM OF NUMBERS FROM 1 - 1000000000
// USING THE firstAddUpTo()
let time1 = performance.now();
firstAddUpTo(1000000000);
let time2 = performance.now();

// Elapsed time is the time taken for the code to get executed
console.log(`firstAddUpTo() Time Elapsed: ${(time2 - time1) / 1000} seconds.`);


// DETERMINING THE TIME IT TAKES THE FIRST CODE TO CALCULATE THE SUM OF NUMBERS FROM 1 - 1000000000
// USING THE secondAddUpTo()
let t1 = performance.now();
secondAddUpTo(1000000000);
let t2 = performance.now();

// Elapsed time is the time taken for the code to get executed
console.log(`secondAddUpTo() Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


/* The secondAddUpTo() function is much more faster than the firstAddUpTo() function
as the secondAddUpTo() function has a shorter duration
*/