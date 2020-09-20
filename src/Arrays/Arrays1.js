
//Store data and iterate = arrays are great, especially if you know the index


export const logAll = () => {
    console.log('BEGIN ARRAYS')

    const strings = [ 'a', 'b', 'c', 'd']
    //4*4 = 16 bytes of storage
    
    console.log(strings[2])
    

    strings.pop();
    strings.pop(); //0(1)

    //push 
    strings.push('e') //0(1)

    //unshift -- add to beginning. We add number to beginning and need to shift everything down one
    // not the best for adding to beginning array since 0(n)
    strings.unshift('x') //0(n)

    //splice
    strings.splice(2, 0, 'alien') //0(n)

    console.log(strings)
    
}
