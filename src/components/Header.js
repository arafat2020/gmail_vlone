import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userLogOut } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const signout = () => {
        auth.signOut().then(() => dispatch(userLogOut()));
        
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img
                    src="https://cdn.freelogovectors.net/svg07/new_gmail_logo.svg"
                    alt="logo"
                />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input
                    placeholder="Search All"
                    type="text"
                />
                <ArrowDropDownIcon className="header__carrot" />
            </div>
            <div className="header__right">
                <IconButton>
                     <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar className='pointer'  onClick={signout} src={ user?.photo}/>
            </div>
        </div>
    );
};

export default Header;