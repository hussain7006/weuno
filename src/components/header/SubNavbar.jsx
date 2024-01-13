import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { subNavbarItems } from "./data.js"

import './SubNavbar.css'


function SubNavbar() {

    const isDesktop = useMediaQuery({
        query: '(min-width: 900px)'
    })
    return (
        <div className='subNavbarBox' style={{ borderBottom: !isDesktop && "none" }}>
            <div className='subNavbarItemsBox' style={{ display: isDesktop ? "flex" : "none" }}>
                {
                    subNavbarItems.map((item, index) => (
                        <span key={`${item}_${index}`} className='subNavbarItemsBoxSpan'>{item.name}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default SubNavbar