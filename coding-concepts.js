// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.


// --------------------1) What will this log?

var cohort = "Echo 2021"
 console.log(cohort.split(""))

// a) Your answer:
  // ["E", "c", "h", "o", " ", "2", "0", "2", "1"]
 
// b) Verify and explain:
  // The above answer is correct. Using the built-in method split(""), we convert a string into an array. 


// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!` 
}
 console.log(greeter("LEARN Student"))

// a) Your answer:
  // "Hello, LEARN Student!"

// b) Verify and explain:
  //  "undefined" -- Under further examination I saw that a "retun" was missing from the line that held the parameter. Without "return" inside the function, it logs "undefined."


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer:
  // [8, 10, 12, 14, 16]

// b) Verify and explain:
  // The above answer is correct. The map() array method will go through the array, multiplying each value by 2. It will print an array of each value multiplied by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
  console.log(onlyOdds)

// a) Your answer:
  // [11, 13, 15]

// b) Verify and explain:
  // The above answer is correct. The filter() array method, will "filter out" any values which have a remainder NOT equal to 0 (because of bang operator). The log will print an array of all values which follow the parameters of the code, giving us only odd numbers.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer:
  // JavaScript

// b) Verify and explain:
  // The answer above is correct. If you follow the variable (myCodingSkills) separated by a period that is like an address to look up the object - "languages". Within the Zero-indexed array, it states [0], which would be the 1st value in the set of data. - "JavaScript"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: 
// b) Verify and explain:
