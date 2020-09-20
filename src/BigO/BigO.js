

export const large = new Array(10).fill('nemo')

export const findNemo = (array) => {
    let t0 = performance.now();
    array.forEach( (item, i) => {
        if( array[i] === 'nemo') {
            console.log('found nemo')
        }
    })
    let t1 = performance.now();
    return (`call to find nemo took  ${(t1 - t0)} milliseconds`)
}

