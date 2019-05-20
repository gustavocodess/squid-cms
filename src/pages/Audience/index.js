import React from 'react'
import get from 'lodash.get'
import { graphql } from 'react-apollo'
import {
  Table, Badge, Popover, Menu, IconButton, Position, Avatar,
} from 'evergreen-ui'
import PropTypes from 'prop-types'
import { getSubscribers } from '../../queries/audience'

const Audience = ({ data }) => {
  const users = get(data, 'commonUsers', [])
  return (
    <div>
      <h2>{`Audience (${users.length})`}</h2>
      <Table className="table-card">
        <Table.Head>
          <Table.TextHeaderCell>
            Status
          </Table.TextHeaderCell>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>
            Email
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Phone
          </Table.TextHeaderCell>
          <Table.TextHeaderCell />
        </Table.Head>
        <Table.VirtualBody height={400}>
          {users.map(user => (
            <Table.Row key={user.id} onSelect={() => console.log(user.name)}>
              <Table.TextCell>
                <Badge color="green">{user.status}</Badge>
              </Table.TextCell>
              <Table.TextCell>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar
                    src={user.profileImage}
                    name={user.name}
                    size={40}
                  />
                  <span style={{ marginLeft: 8 }}>{user.name}</span>
                </div>
              </Table.TextCell>
              <Table.TextCell>{user.email}</Table.TextCell>
              <Table.TextCell>{user.phone}</Table.TextCell>
              <Table.TextCell>
                <Popover
                  position={Position.BOTTOM_LEFT}
                  content={(
                    <Menu>
                      <Menu.Group>
                        <Menu.Item icon="folder-open">Archive...</Menu.Item>
                        <Menu.Item icon="edit">
                          Edit...
                        </Menu.Item>
                      </Menu.Group>
                      <Menu.Divider />
                      <Menu.Group>
                        <Menu.Item icon="trash" intent="danger">
                          Delete...
                        </Menu.Item>
                      </Menu.Group>
                    </Menu>
                  )
                  }
                >
                  <IconButton
                    appearance="minimal"
                    icon="more"
                    iconSize={18}
                  />
                </Popover>
              </Table.TextCell>
            </Table.Row>
          ))}
        </Table.VirtualBody>
      </Table>
    </div>
  )
}


Audience.propTypes = {
  data: PropTypes.object.isRequired,
}

export default graphql(getSubscribers, {
  options: (props) => {
    const influencerId = get(props, 'currentUser.userId', '')
    return ({
      variables: {
        influencerId,
      },
    })
  },
})(Audience)
