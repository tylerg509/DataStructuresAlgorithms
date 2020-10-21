// 0, 1 ,1,2,3,5,8,13,21,34,55,89,144
// previous 2 numbers always equals the current number

// n=5 => 2 + 3

// given a number n return the index of the fibonacci sequence
// 0(n)
export const fibonacciIterative = (n) => {
    let arr = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[n];
};


// 0(2^n) = exponential - recursive algorithms that solve  a problem of size n (worst than two nested for loops)
// note if you try to run this with 43 it will take a sec to run
// can make the argument that this is easier to read, but it increases call stack significantly compared to iterative
// most of time iterative better option
// traversing/searching trees or graphs is good use case. some instances of search
// Every time you are using a tree or converting something into a tree, consider recursion
// how to use/use cases
// 1) divided into a number of subproblems that are smaller instances of the same problem 
// 2) each instance of the subproblem is identical in nature
// 3) the solutions of each subproblem can be combined to solve the problem at hand
export const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
