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

### `yarn start`

