// You can create any datastructure manually

export const runBuildAnArray = () => {
    const newArray = new MyArray();
    console.log(newArray)

    newArray.push('hi')
    newArray.push('you')
    newArray.push('goose')
    console.log(newArray)

    newArray.pop()
    newArray.pop()

    console.log(newArray)
    newArray.push('mop')
    newArray.push('tie')
    const deleted = newArray.delete(1)
    console.log(newArray)
    console.log(deleted)


}

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {//0(1)
        return this.data[index];
    }
    push(item){//0(1)
        this.data[this.length] = item;
        this.length++
        return this.length;
    }
    pop(){ //0(1)
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }
    delete(index){ //0(n)
        const item = this.data[index];
        this.shiftItems(index)
        return item;
    }
    shiftItems(index){ 
        for(let i = index; i< this.length -1; i ++){ //0(n)
            this.data[i] = this.data[i + 1]
        } 
        delete this.data[this.length-1]
        this.length--
    }

}