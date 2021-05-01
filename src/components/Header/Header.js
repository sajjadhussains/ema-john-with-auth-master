import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    const handleLogin=()=>{
        history.push('/login');
        setLoggedInUser({})
    }
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button  onClick={handleLogin}>{loggedInUser.email || loggedInUser.name ? `${loggedInUser.name.slice(0,6)}/Logout` : 'Login'}</button>
            </nav>
        </div>
    );
};

export default Header;