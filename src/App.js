import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Big0 from './BigO/BigO';
import { logAll } from './Arrays/Arrays1';
import { context, referenceTypes } from './Arrays/ArrayAdvanced'
import { runBuildAnArray } from './Arrays/BuildAnArray';
import { reverseString, anotherReverse, secondAnotherReverse } from './Arrays/ReverseAString';
import { mergeSortedArray } from './Arrays/MergeSortedArrays'
import { runMyHashTable } from './HashTables/HashTable'
import { findFirstRecurring, array1, array2, array3 } from './HashTables/HashTableExample';
import { myLinkedList } from './LinkedLists/LinkedList'
import { myDoubleLinkedList } from './LinkedLists/DoubleLinkedList'
import { stackLinkedList } from './StackQueue/StackLinkedList'
import { stackArray } from './StackQueue/StackArray'
import { myQueue } from './StackQueue/Queue';
import { binarySearchTree} from './Trees/BinarySearchTree'
import { mygraph } from './Graphs/Graph';
import { findFactorialRecursive, findFactorialIterative } from './Recursion/RecursionFactorial';
import { fibonacciIterative, fibonacciRecursive } from './Recursion/RecursionFibonacci';
import { bubbleSort, numbersForSort, runBubbleSort } from './Sorting/BubbleSort';
import { runSelectionSort } from './Sorting/SelectionSort';
import { runInsertionSort } from './Sorting/InsertSort';
import { runMergeSort } from './Sorting/MergeSort'
import { runQuickSort } from './Sorting/QuickSort';

function App() {
    return (
        <div className="container">
            <div className="header">Find Nemo:</div>
            <div>{Big0.findNemo(Big0.large)}</div>
            <div>There was a lesson on arrays {logAll()}</div>
            <div>There was a lesson on advanced arrays types {referenceTypes()}</div>
            <div>There was a lesson on advanced arrays context {context(window)}</div>
            <div>There was a lesson on building your own array datastructure {runBuildAnArray()}</div>
            <div>Practiced reversing a string {reverseString('mesoSoup')}</div>
            <div>Practiced reversing a easier {anotherReverse('gooose')}</div>
            <div>Practiced reversing modern {secondAnotherReverse('tyler is the')}</div>
            <div>Practiced merging sorted arrays {mergeSortedArray([0,3,4,31], [4,6,30])}</div>
            <div>Made a hash table {runMyHashTable()}</div>
            <div>Made a function the finds the first recurring {findFirstRecurring(array1)}</div>
            <div>Made a function the finds the first recurring {findFirstRecurring(array2)}</div>
            <div>Made a function the finds the first recurring {findFirstRecurring(array3)}</div>
            <div>Made a linked list class {myLinkedList(10)}</div>
            <div>Made a double linked list class {myDoubleLinkedList(8)}</div>
            <div>Made a stack linked list class {stackLinkedList()}</div>
            <div>Made a stack array class {stackArray()}</div>
            <div>Made a stack array class {myQueue()}</div>
            <div>Made a binary search tree {binarySearchTree()}</div>
            <div>Made a graph {mygraph()}</div>
            <div>Made a recursive function factorial {findFactorialRecursive(5)}</div>
            <div>Made a recursive function iterative {findFactorialIterative( 5)}</div>
            <div>Made a recursive function fibonacci {fibonacciRecursive(21)}</div>
            <div>Made a recursive function fibonacci {fibonacciIterative(21)}</div>
            <div>Made a bubble sort function {runBubbleSort(numbersForSort)}</div>
            <div>Made a selection sort function {runSelectionSort(numbersForSort)}</div>
            <div>Made a insert sort function {runInsertionSort(numbersForSort)}</div>
            <div>Made a merge sort function {runMergeSort(numbersForSort)}</div>
            <div>Made a quick sort function {runQuickSort(numbersForSort)}</div>

        </div>
    );
}

export default App;
