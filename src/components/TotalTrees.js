import React, { useState, useEffect, useRef } from 'react';
import '../css/TotalTrees.css';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

function TotalTrees() {
    const [totalTrees, setTotalTrees] = useState(50023);

    var random = Math.floor(Math.random() * 1000);

    useInterval(() => {
        setTotalTrees(totalTrees + 1);
    }, random);

    return (
        <div>
            <section id="total-tree">
                <div className="section-header">
                    <h3>Total Trees Planted to Date:</h3>
                    <p className="total-trees-number">{totalTrees}</p>
                </div>
                <div className="tree-icons">
                    <i className="fa fa-tree"></i>
                    <i className="fa fa-tree"></i>
                    <i className="fa fa-tree"></i>
                    <i className="fa fa-tree"></i>
                    <i className="fa fa-tree"></i>
                    <i className="fa fa-tree"></i>
                    <i className="fa fa-tree"></i>
                </div>
            </section>
        </div>
    )
}

export default TotalTrees;