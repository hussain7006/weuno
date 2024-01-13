import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CustomCarousel() {
    return (
        <div style={{
            width: '50%',
            height: 'calc(100vh - 80px)'
        }}>

            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showArrows={false}
                showThumbs={false}
            >
                {
                    // [1, 2, 3].map((item) => (

                    <div
                        // key={item}
                        style={{
                            // border: "1px solid red",
                            height: 'calc(100vh - 80px)',
                        }}
                    >
                        <div style={{
                            // border: "1px solid red",

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            width: "65%",
                            height: "80%",
                            textAlign: "left",
                            margin: "auto",
                            fontFamily: 'Inter',
                            marginTop: "8%"
                        }}>
                            {/* <h1>1</h1> */}
                            {/* <img src="images/bell.png" /> */}
                            {/* <p className="legend">Legend 1</p> */}

                            <span
                                style={{
                                    color: "#fff",
                                    width: "100%",
                                    fontSize: "12px",
                                    letterSpacing: "3px"
                                }}
                            >KHAWAJA YANNI</span>
                            <span
                                style={{
                                    color: "#fff",
                                    fontSize: "55px"
                                }}
                            >The new era of luxury</span>
                            <span
                                style={{
                                    color: "#fff"
                                }}
                            >lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorm Ipsum</span>

                            <span style={{
                                background: "transparent url('images/heroCarouselButtonBackground.svg') 0% 0% no-repeat padding-box",
                                opacity: 1,
                                width: "299px",
                                height: "55px",
                            }}>

                            </span>

                        </div>

                    </div>

                    // ))
                }

            </Carousel >
        </div >
    )
}

export default CustomCarousel