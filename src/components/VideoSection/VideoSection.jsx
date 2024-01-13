import React, { useState } from 'react'
import "./VideoSection.css"

import { useMediaQuery } from 'react-responsive'

function VideoSection() {


    const isDesktop = useMediaQuery({
        query: '(min-width: 900px)'
    })


    return (
        <div className='videoSectionMainBox'>
            <div className={`videoSectionElementsBox ${!isDesktop && "videoSectionElementsBoxMobileView"}`}>
                <div className={`videoSectionHeading ${!isDesktop && "videoSectionHeadingMobileView"}`} >
                    Mall Of: Endless Possibilities
                </div>
                <div className={`videoSectionDescription ${!isDesktop && "videoSectionDescriptionMobileView"}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga animi, cupiditate cum molestias dignissimos voluptates ab voluptatum officia delectus assumenda pariatur reiciendis eos, nihil voluptatibus quidem voluptas vel totam facilis.
                </div>

                <div className='videoSectionThumbnailBox' style={{ width: !isDesktop && "100%" }}>
                    <img className='videoSectionThumbnailImg' style={{ width: !isDesktop && "100%" }} src="images/video_thumbnail.png" alt="videoArea" />

                    <div className={`videoSectionThumbnailPlayButtonBox ${!isDesktop && "videoSectionThumbnailPlayButtonBoxMobileView"}`} >
                        <img className={`videoSectionThumbnailPlayButtonIcon ${!isDesktop && "videoSectionThumbnailPlayButtonIconMobileView"}`} src="images/playIcon.png" alt="playIcon" />
                    </div>
                </div>
                <div className={`videoSectionCardBox ${!isDesktop && "videoSectionCardBoxMobileView"}`}>
                    <div className='videoSectionCardItem1'>
                        25 SR/GUEST
                    </div>
                    <div className='videoSectionCardItem2'>
                        <span className='videoSectionCardItem2Title'>
                            Get your General Access Ticket
                        </span>
                        <span className={`videoSectionCardItem2Icon ${!isDesktop && "videoSectionCardItem2IconMobileView"}`}>
                            <img src="images/rightArrow.svg" alt="" />
                        </span>
                    </div>
                    <div className={`videoSectionCardItem3 ${!isDesktop && "videoSectionCardItem3MobileView"}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, delectus vero molestias nisi quasi nulla.
                    </div>

                </div>


            </div>
        </div>
    )
}

export default VideoSection