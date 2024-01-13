import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import './Navbar.css'

import { navbarIcons, hamburgerlist } from "./data.js"

function Navbar() {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)'
  })


  const [isHamburgerClicked, setsHamburgerClicked] = useState(false);

  return (
    <div className='navbarBox'>
      <div className='navbarLogoBox'>
        <img className='navbarLogoImg' src="images/logo.png" alt="" />
      </div>

      {
        isDesktop ? (
          <div className='navbarItemsBox'>
            {
              navbarIcons.map((icon, index) => (
                <span key={`${icon.name}_${index}`} className='navbarIconsSpanBox'><img src={`images/${icon.name}`} width={20} height={20} alt="icon" /></span>
              ))
            }
            <span className='navbarLoginButtonBox'>
              Log in
            </span>

            <span className='navbarLanguageFlagBox'>
              <span className='navbarDropdownIcon'>
                <img src="images/navbarDropdownIcon.png" alt="" />
              </span>
              <span className='navbarFlag'>
                <img src="images/navbarFlag.png" alt="" />
              </span>
              <span className='navbarFlagText'>English</span>
            </span>
          </div>
        ) : (
          <div className='navbarHamburger'>

            <img src="images/hamburger.png" alt="hamBurger" onClick={() => setsHamburgerClicked(!isHamburgerClicked)} />

          </div>
        )
      }

      {
        // isHamburgerClicked && (
        <div className='hamburgerListBox' style={{ left: isHamburgerClicked ? 0 : "-200vw" }}>

          <div className='mobileViewSideViewNavbar'>
            <div className='navbarLogoBox'>
              <img className='navbarLogoImg' src="images/logo.png" alt="" />
            </div>
            <div className='navbarHamburger'>
              <img src="images/navbarCrossIcon.png" alt="hamBurger" onClick={() => setsHamburgerClicked(!isHamburgerClicked)} />
            </div>


          </div>
          <div className='hamburgerListItemsBox'>

            {hamburgerlist.map((item, index) => (
              <span key={`${item.name}_${index}`} className='hamburgerListItems'>{item.name}</span>
            ))}
          </div>





          <div className='sideBarBottomArea'>
            <span className='sideBarLanguageFlagBox' style={{ gap: 20 }}>
              <span className='navbarDropdownIcon'>
                <img src="images/navbarDropdownIcon.png" style={{ transform: 'scale(1.3)' }} alt="" />
              </span>
              <span className='navbarFlag'>
                <img src="images/navbarFlag.png" style={{ transform: 'scale(1.3)' }} alt="" />
              </span>
              <span className='navbarFlagText'>English</span>
            </span>
            <span className='navbarLoginButtonBox'>
              Log in
            </span>

          </div>
        </div>

        // )
      }

    </div>
  )
}

export default Navbar