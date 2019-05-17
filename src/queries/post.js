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


export default getAllPosts
