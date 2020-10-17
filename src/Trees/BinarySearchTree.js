/////////// notes ///////////
// Perfect binary tree is very efficient

import { Player } from '../Arrays/ArrayAdvanced';

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

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            if (this.root === null) {
                this.root = newNode;
            } else {
                let currentNode = this.root;
                while (true) {
                    if (value < currentNode.value) {
                        if (!currentNode.left) {
                            currentNode.left = newNode;

                            return this;
                        }

                        currentNode = currentNode.left;
                    } else {
                        if (!currentNode.right) {
                            currentNode.right = newNode;

                            return this;
                        }

                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    lookup(value) {}
}

//      9
//   4    20
// 1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);

    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
}

export const binarySearchTree = () => {
    const bst = new BinarySearchTree();
    bst.insert(9);
    bst.insert(4);
    bst.insert(20);
    bst.insert(1);
    bst.insert(6);
    bst.insert(15);
    bst.insert(170);

    console.log(bst);

    // console.log(bst)
};
