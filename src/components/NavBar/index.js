import React from 'react'
import { FaChartLine, FaUsers } from 'react-icons/fa'
import { NavLink, withRouter } from 'react-router-dom'
import { auth as fAuth } from 'firebase'
import { SearchInput, Avatar, Menu, Popover, Position, Button } from 'evergreen-ui'
import './styles.css'


const SideBar = () => (
  <div className="nav-bar-container ">
    <SearchInput placeholder="Search content..." />
    <Popover
      position={Position.BOTTOM_LEFT}
      content={(
        <Menu>
          <Menu.Group>
            <Menu.Item icon="people">Profile...</Menu.Item>
            <Menu.Item icon="settings">Settings...</Menu.Item>
            {/* <Menu.Item icon="edit" secondaryText="⌘R">
              Rename...
            </Menu.Item> */}
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <Menu.Item
              icon="log-out"
              intent="danger"
              onSelect={() => fAuth().signOut().then(() => {
                console.log('User Signed Out')
              }, (error) => {
                console.error('Sign Out Error', error)
              })}
            >
              Logout
            </Menu.Item>
          </Menu.Group>
        </Menu>
      )
      }
    >
      <Avatar
        src="https://scontent.fplu8-1.fna.fbcdn.net/v/t1.0-9/13346692_1043694035723809_4700534291562471783_n.jpg?_nc_cat=104&_nc_ht=scontent.fplu8-1.fna&oh=d7deac803ad75bc58b72b10f61b1fa95&oe=5D558634"
        name="Gustavo Codes"
        size={36}
        style={{ cursor: 'pointer' }}
      />
    </Popover>
  </div>
)

export default withRouter(SideBar)
