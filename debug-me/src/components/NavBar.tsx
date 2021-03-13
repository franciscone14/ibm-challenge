import React from 'react';
import '../styles/components/nav.css';

// import { Container } from './styles';

const NavBar: React.FC = (props) => {
  return (
    <div id="nav">
      {props.children}
    </div>
  );
}

export default NavBar;