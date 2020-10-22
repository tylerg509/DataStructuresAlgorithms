

const insertionSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if(array[i] < array[0]) {
            // move number to the first position
            array.unshift(array.splice(i, 1)[0]);

        } else {
            // find where number should go
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j])
                {

                    // move number to the right sport
                    array.splice(j,9,array.splice(i,1)[0])
                }
            }
        }
    }
    return array
}

export const runInsertionSort = (array) => {
    const result = insertionSort(array)
    console.log('insert sort')
    console.log(result)
}