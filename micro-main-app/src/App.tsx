import React from 'react';
import logo from './logo.svg';
import './App.css';
import startQiankun from "./micro";
import { HistoryRouters } from './router';

startQiankun();

function App() {
    return (
        <div className="host-app">
            <HistoryRouters></HistoryRouters>
        </div>
    );
}

export default App;
