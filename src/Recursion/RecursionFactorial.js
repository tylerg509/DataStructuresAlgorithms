// 5! = 5 * 4 * 3 * 2 * 1 === factorial 

// 5! = 5 * 4!

// value is an object == { counter: value.counter, answer: value.answer }
export const findFactorialRecursive = ( value ) => {

    if ( value.counter === 1 ) {
        
        return {counter: 0, answer: value.answer};
    }

    value.counter--
    value.answer = value.answer * (value.counter)
    return findFactorialRecursive({ counter: value.counter, answer: value.answer })

}

export const findFactorialIterative = (value) => {

    let counter = value
    let answer = value;
    while (counter > 1 ) {
        answer = answer * (counter -1)
        console.log(answer)
        counter--
    }
    
    return answer;
}