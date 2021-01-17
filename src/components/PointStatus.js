import React from 'react';
import '../css/PointStatus.css';

function PointStatus({points}) {
    return (
        <div className="container home-point-status">
            <div className="point-container row">
                <div className="point col-4">
                    <p className="point-p point-p-serif">Welcome, JANE DOE</p>
                    <p className="point-p"><span className="point-value">{points}</span> pts</p>
                    <p className="point-p">RBC Rewards+ Visa **** 1234</p>
                </div>
                <div className="vertical-line"></div>
                <div className="point point-right col-2">
                    <p className="point-p" >Points</p>
                    <p className="point-p" >Activity</p>
                </div>
                <div className="vertical-line"></div>
            </div>
        </div>
    )
}

export default PointStatus;

