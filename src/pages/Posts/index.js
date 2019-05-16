import React, { Component } from 'react'
import get from 'lodash.get'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import {
  Table, IconButton, Popover, Menu, Position, Badge, Portal, Pane, Button, SideSheet, Paragraph,
} from 'evergreen-ui'
import { getUserInfo } from '../../queries/user'
import './styles.css'
import posts from './data'


class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewPostModal: false,
    }
  }

  render() {
    return (
      <div>
        <SideSheet
          isShown={this.state.showNewPostModal}
          onCloseComplete={() => this.setState({ showNewPostModal: false })}
        >
          <Paragraph margin={40}>Create New Post</Paragraph>
        </SideSheet>
        <h2>Posts</h2>
        <Table className="table-card">
          <Table.Head>
            <Table.TextHeaderCell>
              Status
            </Table.TextHeaderCell>
            <Table.SearchHeaderCell />
            <Table.TextHeaderCell>
              Description
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Media Type
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
              Created At
            </Table.TextHeaderCell>
            <Table.TextHeaderCell />
          </Table.Head>
          <Table.VirtualBody height={240}>
            {posts.map(profile => (
              <Table.Row key={profile.id} onSelect={() => alert(profile.name)}>
                <Table.TextCell>
                  <Badge color="green">{profile.status}</Badge>
                </Table.TextCell>
                <Table.TextCell>{profile.title}</Table.TextCell>
                <Table.TextCell>{profile.description}</Table.TextCell>
                <Table.TextCell>{profile.type}</Table.TextCell>
                <Table.TextCell>{profile.createdAt}</Table.TextCell>
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
        <Portal>
          <Pane padding={24} position="fixed" bottom={46} right={16}>
            <Button
              iconBefore="plus"
              appearance="primary"
              onClick={() => this.setState({ showNewPostModal: true })}
            >
              New Post
            </Button>
          </Pane>
        </Portal>
      </div>
    )
  }
}


Posts.propTypes = {
  data: PropTypes.object.isRequired,
}

export default graphql(getUserInfo, {
  options: (props) => {
    const params = get(props, 'navigation.state.params', {})
    return ({
      variables: {
        firebaseUserId: 'u103XfGTwXQIaUvpHA4n04z9VQu2',
      },
    })
  },
})(Posts)
