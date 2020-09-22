
export const reverseString = (value) => {

    if(typeof value !== 'string' || value === undefined){
        return 'Err'
    }

    const array = [];
    for (var i = 0; i < value.length; i ++) {
        array.push(value[i])
    }

    const rArray = array.reduceRight((accum, item) => {
        accum = accum + item
        console.log(accum)
        return accum
    }, [])

    return rArray
}

export const anotherReverse = (str) => {
    if(typeof str !== 'string' || str === undefined){
        return 'Err'
    }

    return str.split('').reverse().join('')
}

export const secondAnotherReverse = str => [...str].reverse().join('');