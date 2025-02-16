import React from 'react';
import { FaBrain, FaBuilding, FaChartLine } from 'react-icons/fa';
import Icons from 'Utils/Icons';
import { useCustomNavigate } from './CustomHooks';

const AboutComponent = () => {
    const navigate = useCustomNavigate()

    const handlecardoneClick = () => {
        navigate("/details");
    };

    const handlecardtwoClick = () => {
        navigate("/managed-teams");
    };

    const handlecardthirdClick = () => {
        navigate("/build-operator");
    };

    
    return (
        <section className="about-section">
            <div className="about-header mt-5 mb-5">
                <p>Helping in making smart decisions.</p>
                <h2>Putting the right solutions <br></br> and methods in place.</h2>
            </div>
            <div className="about-container mb-5">
                {/* Card 1 */}
                <div className="about-card" onClick={handlecardoneClick}>
                    <div className="icon green">
                        {/* <FaBrain size={40} /> */}
                        {Icons.captiveModelIcon}
                    </div>
                    <h3>CAPTIVE MODEL</h3>
                    <p>
                        In this model, GCC operates as a subsidiary that the parent company fully owns. The parent company retains complete control over the GCC's operations, strategy, and decision-making.
                    </p>
                    <div className="bottom-links col-12">
                        <div className="row">
                            <div className="col-6 text-start">
                                <a href="/details" className="learn-more">
                                    Explore More <span>&rarr;</span>
                                </a>
                            </div>
                            <div className="col-6 text-end">
                                <a href="/details" className="learn-more-icon">
                                    <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Card 2 */}
                <div className="about-card" onClick={handlecardtwoClick}>
                    <div className="icon blue">
                        {/* <FaBuilding size={40} /> */}
                        {Icons.SharedserviceModelIcon}
                    </div>
                    <h3>SHARED SERVICES MODEL</h3>
                    <p>
                        In this model, our team will take care of the legal and administrative responsibilities related to the employment of the company’s employees.
                    </p>
                    <div className="bottom-links col-12">
                        <div className="row">
                            <div className="col-6 text-start">
                                <a href="/managed-teams" className="learn-more">
                                    Explore More <span>&rarr;</span>
                                </a>
                            </div>
                            <div className="col-6 text-end">
                                <a href="/managed-teams" className="learn-more-icon">
                                    <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Card 3 */}
                <div className="about-card" onClick={handlecardthirdClick}>
                    <div className="icon gray">
                        {/* <FaChartLine size={40} /> */}
                        {Icons.BuildoperateModelIcon}
                    </div>
                    <h3>BUILD OPERATE TRANSFER MODEL</h3>
                    <p>
                        In this model, our team will be setting up and running the GCC on behalf of the client. Ownership will be transferred after a predefined time period.
                    </p>
                    <div className="bottom-links col-12">
                        <div className="row">
                            <div className="col-6 text-start">
                                <a href="/build-operator" className="learn-more">
                                    Explore More <span>&rarr;</span>
                                </a>
                            </div>
                            <div className="col-6 text-end">
                                <a href="/build-operator" className="learn-more-icon">
                                    <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p className='mt-4 about-bottom-text' >
                    We can help you work smarter and help you achieve your business <br></br> goals. Speak to one of our advisers and <span className='span-get-free'> get free advice!</span>
                </p>
                <div className="align-items-center">
                    <button className="contact-btn" onClick={()=>{navigate('/contact')}}>Contact Us <span>&rarr;</span></button>
                </div>
            </div>
            
        </section>
    );
};

export default AboutComponent;
