import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Big0 from './BigO/BigO';

function App() {
    return (
        <div className="container">
            <div className="header">Find Nemo:</div>
            <div>{Big0.findNemo(Big0.large)}</div>
        </div>
    );
}

export default App;
