import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Big0 from './BigO/BigO';
import { logAll } from './Arrays/Arrays1';
import { context, referenceTypes } from './Arrays/ArrayAdvanced'
import { runBuildAnArray } from './Arrays/BuildAnArray';
import { reverseString, anotherReverse, secondAnotherReverse } from './Arrays/ReverseAString';
import { mergeSortedArray } from './Arrays/MergeSortedArrays'
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

        </div>
    );
}

export default App;
