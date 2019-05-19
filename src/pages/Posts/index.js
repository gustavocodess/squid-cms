import React, { Component } from 'react'
import get from 'lodash.get'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import {
  Table, IconButton, Popover, Menu, Position, Badge, Portal, Pane, Button,
} from 'evergreen-ui'
import { getAllPosts } from '../../queries/post'
import NewPostModal from './components/NewPostModal'
import './styles.css'


class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewPostModal: false,
    }
  }

  render() {
    const posts = get(this.props, 'data.posts', [])
    console.log(' ALL POSTS HERE ', posts)
    return (
      <div>
        <NewPostModal
          isVisible={this.state.showNewPostModal}
          onCloseComplete={() => this.setState({ showNewPostModal: false })}
          onSaveComplete={() => {
            this.setState({ showNewPostModal: false })
            this.props.getAllPosts()
          }}
        />
        <h2>{`Posts (${posts && posts.length})`}</h2>
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
          <Table.VirtualBody height={400}>
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
  getAllPosts: PropTypes.func.isRequired,
}

export default graphql(getAllPosts)(Posts)
