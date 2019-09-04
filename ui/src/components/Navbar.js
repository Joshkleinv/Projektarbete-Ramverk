import React from 'react';
import './Navbar.css'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
  
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Link to="/friends">
        <Menu.Item
          name='Friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        >
          Friends
        </Menu.Item>
        </Link>
        <Link to="/chat">
      <Menu.Item
        name='Chat'
        active={activeItem === 'chat'}
        onClick={this.handleItemClick}
      >
        Chat
      </Menu.Item>
      </Link>
      <Link to="/news">
      <Menu.Item
        name='News'
        active={activeItem === 'news'}
        onClick={this.handleItemClick}
      >
        News
      </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item
          name='Logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        >
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    )
  }
}
export default Navbar;
