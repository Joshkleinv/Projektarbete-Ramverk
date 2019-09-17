import React from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logout } from '../../services/Auth'
import { removeEmailAddress } from '../../services/Auth'
import './Navbar.css'

class Navbar extends React.Component {
    state = {};

    handleLogout = () => {
        logout();
        removeEmailAddress();                
        this.props.history.replace('/')
    };

    render() {
        return (
            <Menu className="navBar">
                <Link to="/">
                <Menu.Item
                    name='news'
                >
                    <Icon
                    name="newspaper"
                    />
                    News
                </Menu.Item>
                </Link>
                <Link to="/users">
                <Menu.Item
                    name='users'
                >
                    <Icon 
                    name="address book"
                    />
                    Users
                </Menu.Item>
                </Link>
                <Link to="/chat">
                <Menu.Item
                    name='chat'
                >
                    <Icon
                    name="comments"
                    />
                    Chat
                </Menu.Item>
                </Link>                
                <Link to="/postnews">
                <Menu.Item
                    name='postnews'
                >
                    <Icon
                    name="send"
                    />
                    Post News
                </Menu.Item>
                </Link>
                <Menu.Menu position='right'>
                <Menu.Item
                    name='logout'
                    onClick={this.handleLogout}
                >
                    <Icon
                    name="log out"
                    />
                    Logout
                </Menu.Item>
                </Menu.Menu>
            </Menu>
    )
  }
}
export default Navbar;
