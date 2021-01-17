import React from 'react';
import Hero from '../components/Hero';
import '../css/Footer.css';
import TreeImg from '../img/tree.png';

function Impact() {
    return (
        <div className="impact-body">
            <Hero />
            <div className="container">
                <div className="row impact-box">
                    <div className="col-9 impact-text-box">
                        <h3>How does your purchase make an impact?</h3>
                        <p>6 Pillars of Tree Planting:</p>
                        <p>1. Trees clean the air.</p>
                        <p>2. Trees sequester around 20% of the carbon in the atmosphere (carbon contributes to climate change).</p>
                        <p>3. Trees help clean the water. It actually is like a filter when there's heavy rain. Trees absorb the water and release it gradually.</p>
                        <p>4. Trees help with soil erosion.</p>
                        <p>5. Trees have a social impact to it in terms of employment and life (1.6 billion people on this planet are somehow connected to forests for their livelihood).</p>
                        <p>6. Tree are home to 80% of the world’s biodiversity (on land).</p>

                        <p>We lose about 46-58 thousand square miles of forest each year. Not for nothing—a large portion of those trees are turned into the products we buy and use every day. However, this would be unsustainable without active reforestation efforts, especially when you consider how long it takes for a tree to grow and mature.</p>

                        <p>- Matt Hill, One Tree Planted</p>
                    </div>

                    <div className="col-3 impact-img-box">
                        <img src={TreeImg} alt="Tree with a boy" />
                    </div>
                </div>           

                <div className="row impact-box">
                    <div>
                        <h3>Want to learn more?</h3> 
                        <p>Check out these other resources:</p>

                        <h3>What is Climate Change?</h3>
                        <p>https://www.youtube.com/watch?v=qAEguK7MsA4&ab_channel=OneTreePlanted

                        United Nations Sustainability Goals:
                        https://sdgs.un.org/goals</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impact;