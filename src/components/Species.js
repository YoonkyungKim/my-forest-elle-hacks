import React, { useState } from 'react';

function Species({name, img}) {

    const [mouseOverText, setMouseOverText] = useState(false);
    const [selected, setSelected] = useState(false);

    function mouseOverEvent(){
        setMouseOverText(!mouseOverText);
    }

    function mouseOutEvent(){
        setMouseOverText(!mouseOverText);
    }

    function handleClick(){
        setSelected(!selected);
    }

    return (
        <div className="col-lg-3 col-6 species-container">
            <div className={selected ? 'selected-container mouseOver-container' : 'mouseOver-container'}>
                <div onClick={handleClick} onMouseOverCapture={mouseOverEvent} onMouseOutCapture={mouseOutEvent} key={name} className={selected ? 'selected-species species': "species"}>
                    <img className="species-img" src={img} alt={name} />
                </div>
                <div className="mouseOverText-container">
                    <p className="mouseOverText">{mouseOverText  || selected ? name : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default Species;