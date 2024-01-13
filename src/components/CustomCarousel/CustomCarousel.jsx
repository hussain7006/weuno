import React from 'react'
import { useMediaQuery } from 'react-responsive'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./CustomCarousel.css"

function CustomCarousel() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 900px)'
    })

    return (
        <div className='carouselBox' style={{ width: !isDesktop ? "100%" : "50%" }}>

            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showArrows={false}
                showThumbs={false}
                showIndicators={true}
                showStatus={false}
            >
                {
                    [1, 2, 3].map((item) => (

                        <div className='carouselItemBox'>
                            <div className={`carousetItemSubElementsBox ${!isDesktop && "carousetItemSubElementsBoxMobileView"}`}>
                                {/* <h1>1</h1> */}
                                {/* <img src="images/bell.png" /> */}
                                {/* <p className="legend">Legend 1</p> */}

                                <span className='carouselItem1'>KHAWAJA YANNI</span>
                                <span style={{ display: "flex", flexDirection: "column" }}>
                                    <span className={`carouselItem2 ${!isDesktop && "carouselItem2MobileView"}`}>The new</span>
                                    <span className={`carouselItem2 ${!isDesktop && "carouselItem2MobileView"}`}>era of luxury</span>
                                </span>
                                <span className='carouselItem3'>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorm Ipsum</span>

                                <span style={{
                                    background: "transparent url('images/heroCarouselButtonBackground.svg') 0% 0% no-repeat padding-box",
                                    opacity: 1,
                                    width: "299px",
                                    height: "55px",
                                }}>

                                </span>

                            </div>

                        </div>

                    ))
                }

            </Carousel >
        </div >
    )
}

export default CustomCarousel