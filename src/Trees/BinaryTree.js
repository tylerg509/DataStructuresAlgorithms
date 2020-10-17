/////////// notes ///////////
// Perfect binary tree is very efficient 

// if binary tree is not balanced it could become like a linked list where you have to loop through each node - not 0(log N)


//O log n
// level 0: 2^0 = 1;
// level 1: 2^1 = 2;
// level 2: 2^2 = 4;
// level 3: 2^3 = 8


// h = height
// # of nodes = 2^h -1; 

// log nodes = height 
// or think of it as log nodes = steps

// log 100 = 2 height
// 10^2 = 100 

////  1) binary search tree

// if you go to right the node number must be higher than the current node (tree structure going down)
// if you go to the left the node number must be lower than the current node

// lookup 0(log N)
// insert 0(log N)
// delete 0(log N)

/////////// notes ///////////

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function BinarySearchTree(value) {
    constructor() {
        this.root = null;
    }

    insert(value) {

    }

    lookup(value) {

    }
}
