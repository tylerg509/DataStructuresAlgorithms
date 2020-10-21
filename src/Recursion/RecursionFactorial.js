// 5! = 5 * 4 * 3 * 2 * 1 === factorial 

// 5! = 5 * 4!

// value is an object == { counter: value.counter, answer: value.answer }
export const findFactorialRecursive = ( value ) => {

    console.log('run')
    if ( value.counter === 1 ) {
        
        return {counter: 0, answer: value.answer};
    }

    value.counter--
    value.answer = value.answer * (value.counter)
    console.log(value.answer)
    return findFactorialRecursive({ counter: value.counter, answer: value.answer })



}

// const findFactorialIterative = (value) => {

//     return answer;
// }