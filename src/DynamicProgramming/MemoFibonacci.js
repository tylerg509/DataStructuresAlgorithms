import {memoFibonacciRecursive} from '../Recursion/RecursionFibonacci'

export const runFibonacciMemo = () => {
    const fibonacciFunction = memoFibonacciRecursive()   
    console.log('memo fibonacci') 
    console.log(fibonacciFunction(10))
}