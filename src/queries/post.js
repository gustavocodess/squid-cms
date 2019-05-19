import { gql } from 'apollo-boost'


export const getAllPosts = gql`
  query {
    posts (orderBy: createdAt_DESC){
      status
      createdAt
      title
      id
      description
      type
      imageUrl
      videoUrl
      audioUrl
      bookUrl
      postCreator {
        id
        avatarPath
        name
      }
    }
  }
`

export const addPost = gql`
    mutation AddPost(
      $title: String!,
      $description: String!,
      $postType: PostType!,
      $videoUrl: String,
      $audioUrl: String,
      $bookUrl: String,
      $imageUrl: String,
      $postCreatorId: ID!
      ){
      createPost (data: {
        title: $title,
        description: $description,
        type: $postType,
        videoUrl: $videoUrl,
        audioUrl: $audioUrl,
        bookUrl: $bookUrl,
        imageUrl: $imageUrl,
        postCreator: {
          connect: {
            id: $postCreatorId
          }
        }
      }){
            title
            description
            type
            videoUrl
            audioUrl
            bookUrl
            imageUrl
            postCreator {
              name
            }
        }
    }
`


export default getAllPosts
