import AboutComponent from 'Components/about'
import LogoRow from 'Components/LogoRow'
import CarouselComponent from 'Components/Carousel/CarouselComponent'
import DomainExperienceSection from 'Components/DomainExperienceSection'
import ExperienceSection from 'Components/ExperienceSection'
import TestimonialCarousel from 'Components/TestimonialCarousel'
import React from 'react'
import NewsArticles from 'Components/NewsArticles'
import Footer from 'Components/footer'

const Home = () => {
    return (
        <div className="w-100">
            {/* section - 1  */}
            <section className='section-one'>
                <div className="container-fluid px-5">
                    <CarouselComponent />
                </div>
            </section>
            <div>
                <AboutComponent />
            </div>
            <div>
                <ExperienceSection />
            </div>

            <div>
                <DomainExperienceSection />
            </div>
            <div>
                <TestimonialCarousel />
            </div>
            <div>
                <LogoRow />
            </div>
            <div>
                <NewsArticles />
            </div>
            <div>
                <Footer />
            </div>


        </div>
    )
}

export default Home