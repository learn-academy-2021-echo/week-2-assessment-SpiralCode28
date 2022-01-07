// ASSESSMENT 2: Coding Practical Questions with Jest

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

// b) Create the function that makes the test pass.

    // Psuedo Code:
    
    // Create a function that takes a number as an argument.

    // Use the modulus tool to see if the remainder goes into 3 evenly.
     
    // Return a string literal because we need the variable which will pass into the function and onto the return statement.

    // Red - funtcion was tested (RED) *divisibleByThree is not defined*
    
    // There was the proper red error for all expect statements (Red) -- After writing the function, there was another error that I figure out was caused by the backticks and quotes being switched.

    // Tested again and it gave the proper (RED) good error again.

    // ---------------- b.) Write a function that passes the test.

    // The function will take in each variable, one at a time.

    // Used the modulus sign to give us the remainder, if there is any.

    // Look for an answer of true or false because it's a boolean value

    // If number returns a remainder of 0, it is divisible by three. If there's another value remainding, it is not divisible by three.

    // I went back and reviewed the code block, found I had put the single quotes outside of the return. Replaced with the correct `` marks (backticks) and now test runs (Green).

    // Test is GREEN!

// CODE:
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
                
        expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
                
        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")

    })
})
    
const divisibleByThree = (num) => {
    return num % 3 !== 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
}
    

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

// ---------- b.)
// Pseudo Code: Creat a function capitalized w/ the parameter of array

// Define a new variable that will take an array and iterate through the values using .map()
    //Return the value with the 1st index with .toUpperCase() - used the substring() to complete each string with lower case letters

// return variable
// Run the test using Jest

describe("capitalized", () = {

    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

    // it("a function that takes in an array of words and returns an array with all the words capitalized.". () => 

    it("a function that takes in an array of words and returns an array with all the words capitalized", () => {

        // problem ---- Not sure why I am having an error. I've tried multiple ways to solve... I followed the same format for the describe and it statements. 1st - I commented out #1 problem, but it did not change the error. 2nd - checked for format errors, didn't catch any.

        expect(capitalized(randomNouns1)).toEqual([
            "Streetlamp",
            "Potato",
            "Teeth",
            "Conclusion",
            "Nephew",
        ])
        expect(capitalized(randomNouns2)).toEqual([
            "Temperature",
            "Database",
            "Chopsticks",
            "Mango",
            "Deduction",
        })

    })      

})

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