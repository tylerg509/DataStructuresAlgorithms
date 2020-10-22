// selection sort
// 0(n^2) nested loop

const selectionSort = (array) => {
    const length = array.length;
    for(let i = 0; i< length; i++) {
        let min = i;
        let current = array[i];
            for(let j = i + 1; j< length; j++ ) {
                if (array[j] < array[min]) {
                    // update minimum if current is lower than what we had previously
                    min = j
                }
            }

            array[i] = array[min]
            array[min] = current;
    }
    return array
}

export const runSelectionSort = (array) => {
    const result = selectionSort(array);

    console.log('my selectionSort') 
    console.log(result)
}