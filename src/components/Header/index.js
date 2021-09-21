import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <Link className="logo" to="/">React Movies</Link>
                <Link className="favoritos" to="/favoritos">Salvos</Link>
            </div>
        );
    }
}

export default Header;