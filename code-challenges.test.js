// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Write a test using describe and expect statements that will show the expected outcome for each varible.

describe("Variable is or is not divisible by three", () => {
    
    var num1 = 15
    // Expected output: "15 is divisible by three"
    
    var num2 = 0
    // Expected output: "0 is divisible by three"

    var num3 = -7
    // Expected output: "-7 is not divisible by three"

    it("returns a string that says divisible by three or not divisible by three value", () => {
        // Use expect statements
        expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
                // There was the proper red error for all expect statements (GOOD) -- After writing the function, there was another error that said "expected 15..." "${num} is divisible by three" (not matching but I thought it was how you wrote it)
        expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
                
        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")

    })
})
    
// b) Create the function that makes the test pass.

    // Write a function that passes the test. The function will take in each variable, one at a time. Used the modulus sign to give us the remainder, if any. If number returns a remainder of 0, it is divisible by three. If there's another value remainding, it is not divisible by three.
    const divisibleByThree = (num) => {
        return num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
    }
        // I went back and reviewed the code block, found I had put the single quotes outside of the return. Replaced with the correct ``marks and now test runs green.


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

    // describe("Divisble by three")
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2


// ex.)

    // describe("test a function that returns relax or keep going", () => {

    //     it("Checks each number if it has a remainder using a modulus sign ... if it is divisible by 3 or not divisible by 3", () => {

    //         expect(stressed(true)).toEqual("relax")
    //         expect(stressed(false)).toEqual("keep going")
    //     })
    // })


// b) Create the function that makes the test pass.
// possible use:
 // for()
    // forEach() 

    // Step 1.) create a test with expect statements 
        // Step 1.) using psuedocode
    // Step 2.)
    // Step 3.) refactor (make cleaner)
// (describe can be more simple than the expect) 