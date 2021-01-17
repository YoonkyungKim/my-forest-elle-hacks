import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/TreeCreation.css';
import Location from '../components/Location';
import AL from '../img/AL.png';
import BC from '../img/BC.png';
import ON from '../img/ON.png';
import PR from '../img/PR.png';
import QC from '../img/QC.png';
import whitePine from '../img/white-pine.jpg';
import yellowBirch from '../img/yellow-birch.jpg';
import maple from '../img/maple.jpg';
import balsam from '../img/balsam.jpeg';
import Species from './Species';
import Hero from './Hero';

function TreeCreation() {

    const [species, setSpecies] = useState([]);

    function getSpecies(){
        // temp list
        setSpecies([
            {
                img: whitePine,
                name: "White Pine"
            },
            {
                img: yellowBirch,
                name: "Yello Birch"
            },
            {
                img: maple,
                name: "Maple"
            },
            {
                img: balsam,
                name: "Balsam Fir"
            }
        ])
    }
    
    return (
        <div id="treeCreation">
            {/* <section className="hero1">
                <div className="hero hero1-box">
                    <h1 className="hero-heading">My Forest</h1>
                </div>
            </section> */}
            <Hero />
            <section id="choose-loc-container">
            <h2>Choose Your Location</h2>
            <div id="map-container">
                <Location name="British Columbia" code="BC" img={BC} getSpecies={getSpecies}/>
                <Location name="Prairies" code="PR" img={PR}  getSpecies={getSpecies}/>
                <Location name="Ontario" code="ON" img={ON}  getSpecies={getSpecies}/>
                <Location name="Québec" code="QC" img={QC}  getSpecies={getSpecies}/>
                <Location name="Atlantic" code="AL" img={AL}  getSpecies={getSpecies}/>
            </div>
            </section>
            {species.length !== 0 ? 
                <section id="choose-your-species">
                    <div className="hero2">
                        <div id="species" className="hero hero2-box">
                            <h2 className="hero-heading">Choose your species:</h2>
                        </div>             
                    </div>
                    <div className="row">
                        <div className="species-container row">
                            {species.map(species => (
                                <Species key={species.name} name={species.name} img={species.img} />
                            ))}
                        </div>
                    </div>
                    <div className="plant-btn-container">
                        <Link to='/success'>
                            <button className="redeem-btn plant-btn">  
                                Plant a tree! 
                            </button>
                        </Link> 
                    </div>
                    
                </section> : "" 
            }
        </div>
    )
}

export default TreeCreation;