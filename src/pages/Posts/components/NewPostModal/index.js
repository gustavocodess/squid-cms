/* eslint jsx-a11y/media-has-caption: 0 */
import React, { Component } from 'react'
import {
  SideSheet, Paragraph, TextInputField, Label, Textarea, Select, Button,
} from 'evergreen-ui'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { Document, Page } from 'react-pdf'
import './styles.css'
import { getVideoIdFromUrl } from '../../../../helpers/mediaUrls'
import { addPost } from '../../../../queries/post'


const initialState = {
  title: '',
  description: '',
  postType: 'IMAGE',
  pageNumber: 1,
  mediaUrl: '',
}

class NewPostModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState,
    }
    this.renderAssetInput = this.renderAssetInput.bind(this)
    this.renderAssetPreview = this.renderAssetPreview.bind(this)
    this.handleSavePost = this.handleSavePost.bind(this)
  }

  handleSavePost() {
    this.props.saveNewPost({
      variables: {
        title: this.state.title,
        description: this.state.description,
        postType: 'IMAGE',
        videoUrl: this.state.mediaUrl,
        audioUrl: this.state.mediaUrl,
        bookUrl: this.state.mediaUrl,
        imageUrl: this.state.mediaUrl,
        postCreatorId: 'cjvp9uh2uo0v509460gtce30i',
      },
      // refetchQueries: [{ query: getBooksQuery }]
    }).then((result) => {
      console.log('RESULT SAVED POST ', result)
      this.setState({
        ...initialState,
      })
      this.props.onSaveComplete()
    }).catch(err => console.log('SAVE POST ERROR ', err))
  }

  renderAssetInput() {
    let label = 'IMAGE URL'
    let placeholder = 'Image url...'

    if (this.state.postType === 'VIDEO') {
      label = 'VIDEO URL'
      placeholder = 'Video url...'
    }
    if (this.state.postType === 'BOOK') {
      label = 'EBOOK URL'
      placeholder = 'Ebook url...'
    } else if (this.state.postType === 'AUDIO') {
      label = 'AUDIO URL'
      placeholder = 'Audio url...'
    }
    return (
      <TextInputField
        label={label}
        placeholder={placeholder}
        value={this.state.mediaUrl}
        onChange={e => this.setState({ mediaUrl: e.target.value })}
      />
    )
  }

  renderAssetPreview() {
    const { postType, mediaUrl } = this.state
    if (postType === 'IMAGE' && mediaUrl) {
      return (
        <img src={mediaUrl} alt="media" className="asset-preview" />
      )
    }
    if (postType === 'VIDEO' && mediaUrl) {
      const videoId = getVideoIdFromUrl(mediaUrl)
      const videoAvatar = `https://img.youtube.com/vi/${getVideoIdFromUrl(mediaUrl)}/hqdefault.jpg`
      return (
        <iframe title="Video preview" className="asset-preview" src={`https://www.youtube.com/embed/${videoId}`} />
      )
    } if (postType === 'AUDIO' && mediaUrl) {
      return (
        <audio src={mediaUrl} controls autoPlay />
      )
    } if (postType === 'BOOK' && mediaUrl) {
      return (
        <Document
          className="asset-preview"
          file={mediaUrl}
        >
          <Page height={120} pageNumber={this.state.pageNumber} />
        </Document>
      )
    }
    return null
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
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
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
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
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
            onChange={e => this.setState({
              postType: e.target.value,
              mediaUrl: '',
            })}
          >
            <option value="IMAGE" checked>Image</option>
            <option value="VIDEO">Video</option>
            <option value="AUDIO">Podcast</option>
            <option value="BOOK">Ebook</option>
          </Select>
          <br />
          <br />
          {this.renderAssetInput()}
          {this.renderAssetPreview()}
        </Paragraph>
        <Paragraph margin={40}>
          <Button appearance="primary" onClick={this.handleSavePost}>Save</Button>
        </Paragraph>
      </SideSheet>
    )
  }
}

NewPostModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCloseComplete: PropTypes.func.isRequired,
  onSaveComplete: PropTypes.func.isRequired,
  saveNewPost: PropTypes.func.isRequired,
}

export default graphql(addPost, { name: 'saveNewPost' })(NewPostModal)
