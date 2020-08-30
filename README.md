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

[BIGO Rule Book]()
Rule 1: Worst case
Rule 2: Remove Constants
Rule 3: Different terms for inputs
Rule 4: Drop non dominants 

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

### `yarn start`

