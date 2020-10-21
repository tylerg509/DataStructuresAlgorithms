// bubble sort not efficient but easy to understand
// 0(n^2)

export const numbersForSort = [99, 44, 6, 2, 1, 5, 63, 87, 4, 0]

//0(n^2) // with data above 0(1) for the dataset aboe
export const bubbleSort = (array) => {

    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

export const runBubbleSort = (array) => {
    const result = bubbleSort(array)
    console.log('my own bubble sort function')
    console.log(result)
}