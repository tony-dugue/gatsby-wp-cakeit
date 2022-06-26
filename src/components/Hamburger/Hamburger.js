import React from "react"
import { HamburgerButton } from "./Hamburger.styles"
import HamburgerIcon from '../../images/menu-icon.svg'

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onCLick={handleOverlayMenu}>
    <img src={HamburgerIcon} alt="menu-hamburger" />
  </HamburgerButton>
)

export default Hamburger
