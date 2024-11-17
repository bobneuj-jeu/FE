import home from '../../Assets/Nav/Default/home.svg'
import menu from '../../Assets/Nav/Default/menu.svg'
import calender from '../../Assets/Nav/Default/calender.svg'
import fridge from '../../Assets/Nav/Default/fridge.svg'
import user from '../../Assets/Nav/Default/user.svg'
import homeOrange from '../../Assets/Nav/Orange/home.svg'
import menuOrange from '../../Assets/Nav/Orange/menu.svg'
import calenderOrange from '../../Assets/Nav/Orange/calender.svg'
import fridgeOrange from '../../Assets/Nav/Orange/fridge.svg'
import userOrange from '../../Assets/Nav/Orange/user.svg'

import {NavLink} from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const icons = {
    home: '/',
    menu: '/menu',
    calender: '/calender',
    fridge : '/fridge',
    user : '/user',
};

const iconsDefault = {
    home: home,
    menu: menu,
    calender: calender,
    fridge: fridge,
    user: user,
};


const iconsActive = {
    home : homeOrange,
    menu : menuOrange,
    calender : calenderOrange,
    fridge : fridgeOrange,
    user : userOrange,
};

function NavBtn({name}){
    return(
        <NavItem>
            <NavLink to={icons[name]}>
                {({ isActive }) => (
                    <img
                        src={isActive ? iconsActive[name] : iconsDefault[name]}
                        alt={name}
                    />
                )}
            </NavLink>
        </NavItem>
    )
}

NavBtn.propTypes = {
    name: PropTypes.string.isRequired,
}

export default function NavBar() {
    return (
        <WrapNav>
            {Object.keys(icons).map((key) => (
                <NavBtn key={key} name={key} />
            ))}
        </WrapNav>
    );
}

const WrapNav = styled.ul`
    width: 100%;
    height: 70px;
    border-top: 1px solid #B9B7B7;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    background: white;
`
const NavItem = styled.li`
    display: inline-block;
`;

NavBar.displayName = "NavBar";