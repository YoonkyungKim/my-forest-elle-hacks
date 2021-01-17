import React from 'react';

function Location({name, img, code, getSpecies}) {

    return (
        <div id={code} onClick={getSpecies}>
            <button className="location-btn img">
                <img className="location-img" src={img} alt={name + "map"} />
            </button>
            <p>{name}</p>
        </div>
    )
}

export default Location;