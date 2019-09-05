import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logout } from '../../services/Auth'
import './Navbar.css'

class Navbar extends React.Component {
    state = {};

    handleLogout = () => {
        logout();
        window.location.reload();
    };

    render() {
        return (
            <Menu className="navBar">
                <Link to="/">
                <Menu.Item
                    name='news'
                >
                    News
                </Menu.Item>
                </Link>
                <Link to="/friends">
                <Menu.Item
                    name='friends'
                >
                    Friends
                </Menu.Item>
                </Link>
                <Link to="/chat">
                <Menu.Item
                    name='chat'
                >
                    Chat
                </Menu.Item>
                </Link>
                <Menu.Menu position='right'>
                <Menu.Item
                    name='logout'
                    onClick={this.handleLogout}
                >
                    Logout
                </Menu.Item>
                </Menu.Menu>
            </Menu>
    )
  }
}
export default Navbar;
