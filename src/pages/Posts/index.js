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
    return (
      <div>
        <NewPostModal
          isVisible={this.state.showNewPostModal}
          onCloseComplete={() => this.setState({ showNewPostModal: false })}
          onSaveComplete={() => {
            this.setState({ showNewPostModal: false })
            // this.props.getAllPosts()
          }}
          user={this.props.currentUser}
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
            {posts.map(post => (
              <Table.Row key={post.id} onSelect={() => console.log(post.name)}>
                <Table.TextCell>
                  <Badge color="green">{post.status}</Badge>
                </Table.TextCell>
                <Table.TextCell>
                  <img src={post.thumbnail} alt="thumb" style={{ width: 40, height: 20 }} />
                  <span style={{ marginLeft: 8 }}>{post.title}</span>
                </Table.TextCell>
                <Table.TextCell>{post.description}</Table.TextCell>
                <Table.TextCell>{post.type}</Table.TextCell>
                <Table.TextCell>{post.createdAt}</Table.TextCell>
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
  currentUser: PropTypes.object.isRequired,
}

export default graphql(getAllPosts)(Posts)
