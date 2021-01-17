import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/RedeemSelect.css';

function RedeemSelect({points}) {

    const [pointsToUse, setPointsToUse] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        if (selectedValue <= points / 500 + 1){
            setPointsToUse(selectedValue * 500); 
        } else {
            setPointsToUse(0);
        }
    }, [selectedValue]);

    function handleChange(e){
        setSelectedValue(e.target.value);
    }


    return (
        <div>
            <main className="intro-main">
                <div className="redeem-select-container drop-down-container">
                    
                    {/*<div className="tree-icon">
                        <img src="./img/temp-tree-icon.png" alt="tree-icon" width="48">
                    </div>*/}
                    <div id="i-want-to-redeem">
                        <p>I want to plant  <input className="redeem-input" type="number" value={selectedValue} onChange={handleChange} />
                        {selectedValue === "1" ? "  tree" : "  trees"}
                        </p>
                    </div>         

                    <div id="points">
                        <span className="points-text">for 500 points per tree</span>
                    </div>
                    <div id="redeem-btn">
                        {pointsToUse !== 0 || selectedValue === "" ? <span className="redeem-total">Total Points to Redeem: {pointsToUse}</span> 
                        : <span className="redeem-total">You need more points.</span>}
                        {/* <a href="#treeCreation"> */}
                        <Link to='/redeem'>
                            <button className="redeem-btn">  
                                Redeem
                            </button>
                        </Link>
                        {/* </a> */}

                    </div>
                    
                    {/* {redeem ? <TreeCreation /> : ""} */}
                </div>

                <div className="intro-text-container">
                    <div className="intro-text">
                        <h2>Redeeming just got more rewarding!</h2>
                        <h5>Earn bonus RBC Rewards points by planting a tree.</h5>
                        <h5>Redeem for any of the increments listed below and earn points when you do!</h5>
                        <p>TERMS AND CONDITIONS: Each tree is 500 points, buy 10 and save 500 points each time! An eligible credit card is one that earns RBC Rewards points. When you redeem with your RBC Rewards points to plant to My Forest, you will receive 25 RBC Rewards points for each $25 redeemed, up to a maximum of 1,000 RBC Rewards points for $500. The RBC Rewards points will appear on your credit card statement 8-10 weeks after the redemption is made. Terms and conditions apply. For additional details, please visit RBC Rewards terms and conditions . This offer may not be combined or used in conjunction with any other offer. Royal Bank of Canada reserves the right to withdraw this offer at any time, even after acceptance by you.</p>
                    </div>                 
                </div>

            </main>

            <section id="watch-it-grow" style={{position: "relative"}}>
                {/* <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_vfgwrgqf.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} autoplay></lottie-player> */}
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px', display: 'inline', marginLeft: '-10px', position: 'relative', top: '82px', left: '-100px' }}  loop autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_PbN3Pc.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px', display: 'inline', marginLeft: '-5%', position: 'absolute', top: '96px', left: '120px'}} loop autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_Iztr8s.json"  background="transparent"  speed="1"  style={{width: '600px', height: '600px', display: 'inline', marginLeft: '-10%', position: 'absolute', top: '-95px', left: '180px' }} autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '500px', height: '500px', display: 'inline', marginLeft: '-10%', position: 'absolute', top: '-23px', left: '200px' }}  loop autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_Iztr8s.json"  background="transparent"  speed="1"  style={{width: '700px', height: '700px', display: 'inline', marginLeft: '-10%', position: 'absolute', top: '-158px'}}  autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_PbN3Pc.json"  background="transparent"  speed="1"  style={{width: '400px', height: '400px', display: 'inline', marginLeft: '-30%', position: 'absolute', top: '35px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_Iztr8s.json"  background="transparent"  speed="1"  style={{width: '600px', height: '600px', display: 'inline', marginLeft: '-10%', position: 'absolute', top: '-95px'}} autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_Iztr8s.json"  background="transparent"  speed="1"  style={{width: '700px', height: '700px', display: 'inline', marginLeft: '-10%', position: 'absolute', top: '-158px', left: '50px'}}  autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_PbN3Pc.json"  background="transparent"  speed="1"  style={{width: '400px', height: '400px', display: 'inline', marginLeft: '-30%', position: 'absolute', top: '35px', left: '120px'}}  autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '500px', height: '500px', display: 'inline', marginLeft: '-10%', position: 'absolute', top: '-23px', left: '120px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px', display: 'inline', marginLeft: '-8%', position: 'absolute', top: '98px', left: '120px' }}  autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_Iztr8s.json"  background="transparent"  speed="1"  style={{width: '700px', height: '700px', display: 'inline', marginLeft: '30%', position: 'absolute', top: '-158px', left: '50px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_PbN3Pc.json"  background="transparent"  speed="1"  style={{width: '400px', height: '400px', display: 'inline', marginLeft: '64%', position: 'absolute', top: '35px', left: '120px'}}  autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '500px', height: '500px', display: 'inline', marginLeft: '20%', position: 'absolute', top: '-23px', left: '120px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px', display: 'inline', marginLeft: '50%', position: 'absolute', top: '98px', left: '120px' }}  autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_PbN3Pc.json"  background="transparent"  speed="1"  style={{width: '400px', height: '400px', display: 'inline', marginLeft: '61%', position: 'absolute', top: '35px', left: '200px'}}  autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '500px', height: '500px', display: 'inline', marginLeft: '46%', position: 'absolute', top: '-23px', left: '120px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px', display: 'inline', marginLeft: '37%', position: 'absolute', top: '98px', left: '160px' }}  autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_Iztr8s.json"  background="transparent"  speed="1"  style={{width: '700px', height: '700px', display: 'inline', marginLeft: '42%', position: 'absolute', top: '-158px', left: '50px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_PbN3Pc.json"  background="transparent"  speed="1"  style={{width: '400px', height: '400px', display: 'inline', marginLeft: '27%', position: 'absolute', top: '35px', left: '120px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '500px', height: '500px', display: 'inline', marginLeft: '41%', position: 'absolute', top: '-23px', left: '120px'}}  loop autoplay></lottie-player>
                <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_I6qCjk.json"  background="transparent"  speed="1"  style={{width: '500px', height: '500px', display: 'inline', marginLeft: '56%', position: 'absolute', top: '-23px', left: '120px'}}  autoplay></lottie-player>
                <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_Iztr8s.json"  background="transparent"  speed="1"  style={{width: '700px', height: '700px', display: 'inline', marginLeft: '62%', position: 'absolute', top: '-158px', left: '50px'}}  loop autoplay></lottie-player>
            </section>
        </div>
    )
}

export default RedeemSelect;