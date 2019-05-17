import React, { Component } from 'react'
import {
  SideSheet, Paragraph, TextInputField, Label, Textarea, Select,
} from 'evergreen-ui'
import PropTypes from 'prop-types'

class NewPostModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postType: 'IMAGE',
    }
    this.renderAssetInput = this.renderAssetInput.bind(this)
  }

  renderAssetInput() {
    if (this.state.postType === 'IMAGE') {
      return (
        <TextInputField
          label="IMAGE URL"
          placeholder="Image url..."
        />
      )
    }
    if (this.state.postType === 'VIDEO') {
      return (
        <TextInputField
          label="VIDEO URL"
          placeholder="Video url..."
        />
      )
    }
    if (this.state.postType === 'BOOK') {
      return (
        <TextInputField
          label="EBOOK URL"
          placeholder="Ebook url..."
        />
      )
    }
    return (
      <TextInputField
        label="AUDIO URL"
        placeholder="Audio url..."
      />
    )
  }

  render() {
    return (
      <SideSheet
        isShown={this.props.isVisible}
        onCloseComplete={() => this.props.onCloseComplete()}
      >
        <Paragraph margin={40}>Create New Post</Paragraph>
        <Paragraph margin={40}>
          <TextInputField
            label="TITLE"
            placeholder="Post title..."
          />

          <Label
            htmlFor="textarea-description"
            marginBottom={4}
            display="block"
          >
            DESCRIPTION
          </Label>
          <Textarea
            id="textarea-description"
            placeholder="Post description..."
            style={{ resize: 'none' }}
          />
          <br />
          <br />
          <Label
            htmlFor="select-media"
            marginBottom={4}
            display="block"
          >
            POST TYPE
          </Label>
          <Select
            width={240}
            id="select-media"
            value={this.state.postType}
            onChange={e => this.setState({ postType: e.target.value })}
          >
            <option value="IMAGE" checked>Image</option>
            <option value="VIDEO">Video</option>
            <option value="AUDIO">Podcast</option>
            <option value="BOOK">Ebook</option>
          </Select>
          <br />
          <br />
          {this.renderAssetInput()}
        </Paragraph>
      </SideSheet>
    )
  }
}

NewPostModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCloseComplete: PropTypes.func.isRequired,
}

export default NewPostModal
