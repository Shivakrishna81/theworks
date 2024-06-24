import React from 'react';
import Donut from './components/Donut';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1>Donut Shapes with Hover Effect</h1>
            <div className="donut-wrapper">
                <Donut text="Donut 1" isFirstPerson />
                <Donut text="Donut 2" />
                <Donut text="Donut 3" />
            </div>
        </div>
    );
};

export default App;
