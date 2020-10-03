
export const mergeSortedArray = (arr1, arr2) => {
    const mergedArrays = [...arr1, ...arr2];
    console.log('MERGE SORTED ARRAYS')
    console.log(mergedArrays.sort((a, b) => a - b))
}