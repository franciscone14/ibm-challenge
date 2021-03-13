import React from 'react';
import '../styles/components/nav-item.css';

export interface NavItemProps {
    title: string;
    route: string;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = (props) => {
    return (
        <div id="nav-item">
            <a style={props.active ? {color: 'black'} : {color: 'rgb(167, 161, 161)'}} href={props.route}>{props.title}</a>
        </div>
    );
}

export default NavItem;