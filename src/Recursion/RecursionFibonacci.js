// 0, 1 ,1,2,3,5,8,13,21,34,55,89,144
// previous 2 numbers always equals the current number

// n=5 => 2 + 3

// given a number n return the index of the fibonacci sequence
export const fibonacciIterative = (n) => {
    let arr = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[n];
};

export const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
