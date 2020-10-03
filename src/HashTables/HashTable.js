// Create a hash table from scratch
class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }


    //0(1) if there are collisions this could be o 0(n)
    // A collision is where there are multiple entries in a single hash address 
    get(key) {

        let address = this._hash(key)
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    //0(1) because we do not loop here
    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value])
        return this.data
        
    }

    // since hash is very fast we consider this 0(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i ++) {
            hash = (hash + key.charCodeAt(i) * i) % 
            this.data.length
        }

        return hash;
    }
}

export const runMyHashTable = () => {
    const myHashTable = new HashTable(50);
    console.log('SET IN HASH TABLE')
    const result  = myHashTable.set('grapes', 1000);
    const apple  = myHashTable.set('apple', 900);

    console.log(result)
    const grape = myHashTable.get('grapes')
    console.log('MADE A HASH TABLE')
    console.log(grape)
}