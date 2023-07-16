import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
      user,
      isAuthenticated,
      loginWithRedirect,
      logout,
    } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

  return (
      
<header className="header relative top-0 min-w-full bg-gray-100 shadow-md flex items-center justify-between px-8 py-4">
  
  <h1 className="w-3/12">
    <RouterNavLink
      className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
      activeClassName="is-active"
      to="/"
    >
      MentorTool
    </RouterNavLink>
  </h1>

  <nav className="nav font-semibold text-lg ">
      <ul className="flex items-center">
          <li>
          <RouterNavLink
            className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
            activeClassName="is-active"
            to="/"
          >
            Home
          </RouterNavLink>
          </li>
          <li>
          <RouterNavLink
            className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
            activeClassName="is-active"
            to="/about"
          >
            About
          </RouterNavLink>
          </li>
          <li>
          <RouterNavLink
            className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
            activeClassName="is-active"
            to="/resources"
          >
            Resources
          </RouterNavLink>
          </li>
          {isAuthenticated && (
          <li>
          <RouterNavLink
            className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
            activeClassName="is-active"
            to="/DataPage"
          >
            DataPage
          </RouterNavLink>
          </li>
          )}
      </ul>
  </nav>

  
  <div className="w-3/12 flex justify-end">

      
     <Nav className="w-6/12 flex justify-end" navbar inNavbar>
            {!isAuthenticated && (
              <NavItem>
                <Button
                  id="qsLoginBtn"
                  color="primary"
                  className="bg-gradient-to-r from-cyan-100 to-blue-200 text-white px-4 py-2 rounded-md ml-8"
                  onClick={() => loginWithRedirect()}
                >
                  Log in
                </Button>
              </NavItem>
            )}
            {isAuthenticated && (
              <div>
                <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                  />
                </Button>
                </div>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                >
                  <MenuItem >{user.name}</MenuItem>
                  
                  {/* <DropdownItem
                    tag={RouterNavLink}
                    to="/profile"
                    className="dropdown-profile"
                    activeClassName="router-link-exact-active"
                  >
                    <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                  </DropdownItem> */}
                  <MenuItem
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Nav>
          {/* {!isAuthenticated && (
            <Nav className="w-3/12 flex justify-end" navbar>
              <NavItem>
                <Button
                  id="qsLoginBtn"
                  color="primary"
                  block
                  onClick={() => loginWithRedirect({})}
                >
                  Log in
                </Button>
              </NavItem>
            </Nav>
          )} */}
          {/* {isAuthenticated && (
            <Nav
              className="d-md-none justify-content-between"
              navbar
              style={{ minHeight: 170 }}
            >
              <NavItem>
                <span className="user-info">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile d-inline-block rounded-circle mr-3"
                    width="50"
                  />
                  <h6 className="d-inline-block">{user.name}</h6>
                </span>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon="user" className="mr-3" />
                <RouterNavLink
                  to="/profile"
                  activeClassName="router-link-exact-active"
                >
                  Profile
                </RouterNavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon="power-off" className="mr-3" />
                <RouterNavLink
                  to="#"
                  id="qsLogoutBtn"
                  onClick={() => logoutWithRedirect()}
                >
                  Log out
                </RouterNavLink>
              </NavItem>
            </Nav>
          )}    */}
  </div>
</header>
  )
}

export default NavBar;

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const {
//     user,
//     isAuthenticated,
//     loginWithRedirect,
//     logout,
//   } = useAuth0();
//   const toggle = () => setIsOpen(!isOpen);

//   const logoutWithRedirect = () =>
//     logout({
//         logoutParams: {
//           returnTo: window.location.origin,
//         }
//     });

//   return (
//     <div className="header sticky top-0 min-w-full bg-gray-100 opacity-80 shadow-md flex items-center justify-between px-8 py-4">
//       <Navbar color="light" light expand="md">
//         <Container>
          
          
          
//             <Nav className="nav font-semibold text-lg" navbar>
//               <NavItem>
//                 <NavLink
//                   tag={RouterNavLink}
//                   to="/"
//                   exact
//                   activeClassName="router-link-exact-active"
//                 >
//                   Home
//                 </NavLink>
//               </NavItem>
//               {isAuthenticated && (
//                 <NavItem>
//                   <NavLink
//                     tag={RouterNavLink}
//                     to="/external-api"
//                     exact
//                     activeClassName="router-link-exact-active"
//                   >
//                     External API
//                   </NavLink>
//                 </NavItem>
//               )}
//             </Nav>
//             <Nav className="w-3/12 flex justify-end" navbar>
//               {!isAuthenticated && (
//                 <NavItem>
//                   <Button
//                     id="qsLoginBtn"
//                     color="primary"
//                     className="btn-margin"
//                     onClick={() => loginWithRedirect()}
//                   >
//                     Log in
//                   </Button>
//                 </NavItem>
//               )}
//               {isAuthenticated && (
//                 <UncontrolledDropdown nav inNavbar>
//                   <DropdownToggle nav caret id="profileDropDown">
//                     <img
//                       src={user.picture}
//                       alt="Profile"
//                       className="nav-user-profile rounded-circle"
//                       width="50"
//                     />
//                   </DropdownToggle>
//                   <DropdownMenu>
//                     <DropdownItem header>{user.name}</DropdownItem>
//                     <DropdownItem
//                       tag={RouterNavLink}
//                       to="/profile"
//                       className="dropdown-profile"
//                       activeClassName="router-link-exact-active"
//                     >
//                       <FontAwesomeIcon icon="user" className="mr-3" /> Profile
//                     </DropdownItem>
//                     <DropdownItem
//                       id="qsLogoutBtn"
//                       onClick={() => logoutWithRedirect()}
//                     >
//                       <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
//                       out
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               )}
//             </Nav>
//             {!isAuthenticated && (
//               <Nav className="w-3/12 flex justify-end" navbar>
//                 <NavItem>
//                   <Button
//                     id="qsLoginBtn"
//                     color="primary"
//                     block
//                     onClick={() => loginWithRedirect({})}
//                   >
//                     Log in
//                   </Button>
//                 </NavItem>
//               </Nav>
//             )}
//             {isAuthenticated && (
//               <Nav
//                 className="d-md-none justify-content-between"
//                 navbar
//                 style={{ minHeight: 170 }}
//               >
//                 <NavItem>
//                   <span className="user-info">
//                     <img
//                       src={user.picture}
//                       alt="Profile"
//                       className="nav-user-profile d-inline-block rounded-circle mr-3"
//                       width="50"
//                     />
//                     <h6 className="d-inline-block">{user.name}</h6>
//                   </span>
//                 </NavItem>
//                 <NavItem>
//                   <FontAwesomeIcon icon="user" className="mr-3" />
//                   <RouterNavLink
//                     to="/profile"
//                     activeClassName="router-link-exact-active"
//                   >
//                     Profile
//                   </RouterNavLink>
//                 </NavItem>
//                 <NavItem>
//                   <FontAwesomeIcon icon="power-off" className="mr-3" />
//                   <RouterNavLink
//                     to="#"
//                     id="qsLogoutBtn"
//                     onClick={() => logoutWithRedirect()}
//                   >
//                     Log out
//                   </RouterNavLink>
//                 </NavItem>
//               </Nav>
//             )}
          
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default NavBar;

// export default function Navbar() {
//     return (
        
// <header className="header sticky top-0 min-w-full bg-gray-100 opacity-80 shadow-md flex items-center justify-between px-8 py-4">
    
//     <h1 className="w-3/12">
//       <NavLink
//         className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
//         activeClassName="is-active"
//         to="/"
//       >
//         MentorTool
//       </NavLink>
//     </h1>

//     <nav className="nav font-semibold text-lg ">
//         <ul className="flex items-center">
//             <li>
//             <NavLink
//               className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
//               activeClassName="is-active"
//               to="/"
//             >
//               Home
//             </NavLink>
//             </li>
//             <li>
//             <NavLink
//               className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
//               activeClassName="is-active"
//               to="/about"
//             >
//               About
//             </NavLink>
//             </li>
//             <li>
//             <NavLink
//               className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
//               activeClassName="is-active"
//               to="/resources"
//             >
//               Resources
//             </NavLink>
//             </li>
//         </ul>
//     </nav>

    
//     <div className="w-3/12 flex justify-end">
        
//     </div>
// </header>
//     )
// }