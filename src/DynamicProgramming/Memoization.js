
const add80 = (n) => {
    console.log('long time')
    return n + 80;
}

const memoizedAdd80 = () => {
    let cache = {}
    return function(n) {
        if (n in cache) {
            return cache[n]
        } else {
            console.log('long time')
            cache[n] = n +80
            return cache[n]
        }
    }

}

export const runMemoizedAdd80 = (n) => {

    console.log('memoization add 80')
    const memoized = memoizedAdd80()

    // note that long time only prints once
    console.log(memoized(n))
    console.log(memoized(n))

    // if you uncomment this long time is logged twice
    // console.log(memoized(n+1))

}