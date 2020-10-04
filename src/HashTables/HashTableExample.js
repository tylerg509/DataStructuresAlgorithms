
// Find first recurring


export const array1 = [2,5,1,2,3,5,1,2,4]

export const array2 = [2,1,1,2,3,5,1,2,4]

export const array3 = [2,3,4,5]

// note that if you loop through the array and compare each value using 2 for loops you could end up with 0(n^2)

// 0(n) 
export const findFirstRecurring = (array) => {
    const obj = {}
    let returnValue = undefined;

    for (let item = 0; item < array.length; item++) {
        if (obj[array[item]] !== undefined) {
            returnValue = array[item];
            break;
        }
        obj[array[item]] = item;
    }

    return returnValue;
}