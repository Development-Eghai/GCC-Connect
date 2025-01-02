
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
    return (
        <Carousel interval={null} className='section-one'>
            <Carousel.Item>
                <div className='carousel-item-cls'>
                    <div className="col-9">
                        <p>Putting the right solutions and methods in place!</p>
                        <h1 className='col-4 fw-bold'>Welcome to GCC Connect</h1>
                        <p className='col-7'>GCC View360 product provides end to end solutions that are required by companies for setting up successful innovation centers in India. We will partner with companies at every stage of this process</p>
                    <div className='d-flex col-4 justify-content-start gap-4 	'>
                    <button className="contact-btn">Our Services <span>&rarr;</span></button>
                    <button className="contact-btn-border">About Us</button>
                    </div>


                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-cls'>
                    <div className="col-9">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-cls'>
                    <div className="col-9">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent