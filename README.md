This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Big0

BigO & Scalability = When you bigger and bigger with input how much does the code slow down

BigO notation = BigO of n = BigO depends on number of inputs
O(n) ==> linear time

O(1) ==> constant time

Ex of 0(1)
const red = (boxes) => {
    console.log(boxes[0])
}

[EX calculate big O]()
function funChallenge(input) {
  let a = 10; O(1)
  a = 50 + 3; O(1)

  for (let i = 0; i < input.length; i++) { O(n)
    anotherFunction(); O(n)
    let stranger = true; O(n)
    a++; O(n)
  }
  return a; O(1)
}

BIGO = 3 + 4n

[EX calculate big O]
function anotherFunChallenge(input) {
  let a = 5; O(1)
  let b = 10; O(1)
  let c = 50; O(1)
  for (let i = 0; i < input; i++) { O(n)
    let x = i + 1;  O(n)
    let y = i + 2;  O(n)
    let z = i + 3;  O(n)

  }
  for (let j = 0; j < input; j++) {  O(n)
    let p = j * 2;  O(n)
    let q = j * 2;  O(n)
  }
  let whoAmI = "I don't know"; O(1)
}

BIGO = 4 + 7n

[BIGO Rule Book - for expressing Big0]()
Rule 1: Big O always measures the worst case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms

function compressBoxes(boxes) {
    boxes.forEach(function(boxes)) {
        console.log(boxes)
    }

    boxes.forEach(function(boxes)) {
        console.log(boxes)
    }
}

This is O(2n) but is simplified to O(n) since we drop the constants

Rule3

function compressBoxes(boxes, boxes2) {
    boxes.forEach(function(boxes)) {
        console.log(boxes)
    }

    boxes2.forEach(function(boxes)) {
        console.log(boxes)
    }
}

BIG0 = O(a + b) 
Since we have foreach that happens one after another we add. In the next example we have foreach within foreach so we multiply

Rule4
const boxes = [1,2,3,4,5]

function logAllPairsOfArray(array) {
    for (let i =0; i < array.length; i++){
        for(let j = 0; j < array.length; j++) {
            console.log( array[i], array[j])
        }
    }
}

BIGO = O(n * n) === O(n^2) 

Drop non dominant terms
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

O(x^2 + 3x + 100 + x/2) === O(x^2) big O notation. We do not care about insignificant items

Cheat sheet

# Big O Cheat Sheet:
- Big OsO(1) Constant- no loops
O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
O(n) Linear- for loops, while loops through n items
O(n log(n)) Log Liniear- usually sorting operations
O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops
O(2^n) Exponential- recursive algorithms that solves a problem of size N
O(n!) Factorial- you are adding a loop for every element (very expensive and you are doing something wrong)
Iterating through half a collection is still O(n)
Two separate collections: O(a * b)

- What can cause time in a function? -
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

- Rule Book
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms

- What causes Space complexity? -
Variables
Data Structures
Function Call
Allocations

# Pillars of code

Scaleable - speed and memory

1. Readale
2. Memory - space complexity
3. Speed - time complexity

1. Heap - where we store our variables
2. Stack - where we keep track of function calls

function booooo(n){
  for (let i = 0; i < n.length; i++ ) {
    console.log('boooo!)
  }
}

boooo([1,2,3,4]) // O(1)

function arrayOfHiNTTimes(n){
  let hiArray = [] // new data structure
  for(let i = 0; i < n.length; i++) {
    hiArray[i] = 'hi' // new memory in our computers n times
  }
  return hiArray;
}

arrayOfHiNTTimes(6) // O(n)

# Stacks vs Queues
1. Stack = LIFO. lookup, pop, push, peek
2. Queue = FIFO. lookup, enqueue, dequeue, peek. 
  a. do not build a queue with an array because if you remove in middle you have to shift everything. 

#Recursion 
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have two returns in a recursive function

ex. 
let couter = 0;
function inception() {
  if(counter > 3) {
    return 'done'
  }

  counter++
  return inception()
} 

# linear search 0(n) would look at each item
# binary search (log(n)) - find median and throw out the rest - only works if sorted 
-- when inserting we should sort while inserting if we want to use this

# searching a graph or tree 
      9
    4   20
  1 6 15  170

# breadth first search. 0(n)
1. move left to right in each level of the tree until you find what you are looking for
2. good for finding shortest path
3. bad because requires more memory
4. good if you know that what you are searching for is at top of tree/graph
9,4,20,1,6,15,170
# depth first search 0(n)
1. start at top and go down until you reach a node with no children. If you reach bottom go up a level
2. good less memory
3. use if asking does path exist?
4. bad because can get slow 
9,4,1,6,20,15,170

# bellman algorithm
- effective at shortest path because it considers negative weight
- takes a long time to run potentially
- not as efficient
# dijkstra algorithm
- faster/more efficient
- does not accomodate for negative nodes
### `yarn start`

