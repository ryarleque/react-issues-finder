import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header"></div>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Header;