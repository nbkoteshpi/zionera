import React from "react";

export interface ZionNavbarItemProps {
  navItemText?: string;
}

const NavItem = (props) => {
  const { navItemText } = props;
  return (
    <>
      <li className="nav-item">
        <a className="nav-link text-body" href="javascript:void(0)">
          {navItemText}
        </a>
      </li>
    </>
  );
};

export default NavItem;
