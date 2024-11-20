import React from "react";
import { Link } from "react-router-dom";

export interface ZionNavbarItemProps {
  navItemText?: string;
  navigateTo?: string;
}

const NavItem = (props) => {
  const { navItemText,navigateTo } = props;
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link text-body" to={navigateTo}> {navItemText}</Link>
      </li>
    </>
  );
};

export default NavItem;
