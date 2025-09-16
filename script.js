/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const person = {
   first: "Abdulaziz",
   last:"Alkathiri",
   _gpa : 3.7,
   get fullName() {
      return this.first + " " + this.last;
   }, 
   get gpa () {
      return this.first + " " + this.last;
   }, 
   set gpa(value) {       // safe write access with validation
    if (value >= 0 && value <= 4) {
      this._gpa = value;
   }
  }
};

console.log(person.firstName)


// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseTitles = { 
  A101: "Intro", 
  A201: "Data Structures" 
};

// 🔹 for...in → loops over keys
for (const key in courseTitles) {
  console.log("Key:", key, "Value:", courseTitles[key]);
}
// 🔹 Object.keys → array of keys
console.log(Object.keys(courseTitles)); 
// ["A101", "A201"]
// 🔹 Object.values → array of values
console.log(Object.values(courseTitles)); 
// ["Intro", "Data Structures"]
// 🔹 Object.entries → array of [key, value] pairs
console.log(Object.entries(courseTitles)); 
// [["A101", "Intro"], ["A201", "Data Structures"]]
// 🔹 entries in a loop
for (const [key, value] of Object.entries(courseTitles)) {
  console.log(`Course ${key}: ${value}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const str1 = "Hello World";      // plain string
const str2 = new String("Hi!");  // String object

// 2) Use .charAt(index) and .length
console.log("String 1:", str1);
console.log("Length:", str1.length);
console.log("First character:", str1.charAt(0));   // 'H'
console.log("Fifth character:", str1.charAt(4));   // 'o'
console.log("\nString 2:", str2.toString());
console.log("Length:", str2.length);
console.log("Second character:", str2.charAt(1));  // 'i'
// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const d = new Date();
console.log("Current Date Object:", d);
console.log("Day of Month:", d.getDate());      // 1–31
console.log("Month (0–11):", d.getMonth());     // 0 = January
console.log("Year:", d.getFullYear()); 

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const nums = [10, 2, 40, 42, 45, 46, 47, 48, 49, 30];

// 2) Use spread syntax to find extremes
const min = Math.min(...nums);
const max = Math.max(...nums);

// 3) Display both values
console.log("Numbers:", nums);
console.log("Minimum:", min);
console.log("Maximum:", max);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function getMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty! Cannot find maximum.");
  }
  return Math.max(...arr);
}

// 2 & 3) Use try-catch-finally
try {
  console.log("Trying with empty array...");
  const result = getMax([]);   // intentional error
  console.log("Max value:", result); 
} catch (e) {
  console.error("Caught an error:", e.message);
} finally {
  console.log("Finally block executed (cleanup/logging happens here).");
}

// Another test with non-empty array
try {
  console.log("\n Trying with [3, 7, 2, 9]...");
  const result = getMax([3, 7, 2, 9]);
  console.log("Max value:", result);
} catch (e) {
  console.error("Caught an error:", e.message);
} finally {
  console.log("Finally block executed again.");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const re = /ab/;
words.forEach(word => {
  if (re.test(word)) {
    console.log(`${word} matches!`);
  }
});

// End of Advance JavaScript Lab — good luck!
