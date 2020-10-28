import {bottomUpFibonacci, memoFibonacciRecursive} from '../Recursion/RecursionFibonacci'

export const runFibonacciMemo = () => {
    const fibonacciFunction = memoFibonacciRecursive()   
    console.log('memo fibonacci') 
    console.log(fibonacciFunction(10))
}

export const runFibonacciMemo2 = () => {
    console.log('memo fibonacci 2') 
    console.log(bottomUpFibonacci(100))
}