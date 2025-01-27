
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
    return (
        <Carousel interval={null} className='section-one'>
            <Carousel.Item>
                <div className='carousel-item-cls'>
                    <div className="col-12 col-md-8">
                        <p>Putting the right solutions and methods in place!</p>
                        <h1 className=' fw-bold'>Welcome to GCC Connect</h1>
                        <p className=''>GCC View360 product provides end to end solutions that are required by companies for setting up successful innovation centers in India. We will partner with companies at every stage of this process</p>
                    <div className='d-flex col-12 justify-content-start'>
                    <div className="p-2 col-6 col-lg-3">
                    <button className="contact-btn w-100 ">Our Services</button>
                    </div>
                    <div className="p-2 col-6 col-lg-3">
                    <button className="contact-btn-border w-100 ">About Us</button>
                    </div>
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