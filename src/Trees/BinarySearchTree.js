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

    lookup(value) {
        if (this.root === null) {
            console.error('The tree is empty');
            return;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode === null || currentNode.value === null) {
                    console.error('The node was not found - handled');
                    return;
                }
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                } else if (value === currentNode.value) {
                    return currentNode;
                } else {
                    console.error('The node was not found - not handled');

                    return;
                }
            }
        }
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
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
    const red = bst.lookup(15);
    bst.lookup(1000);

    console.log('binary search tree insert');
    console.log(JSON.parse(JSON.stringify(bst)));
    console.log('binary search tree lookup');
    console.log(JSON.parse(JSON.stringify(red)));
    console.log('binary search tree error handle');

    bst.remove(20);
    console.log(bst);
    // console.log(bst)
};
