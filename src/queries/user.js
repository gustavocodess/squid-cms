import { gql } from 'apollo-boost'


export const getUserInfo = gql`
  query GetInfluencer($firebaseUserId: String) {
    influencer(where: { firebaseUserId: $firebaseUserId }) {
      status
      updatedAt
      createdAt
      id
      email
      name
      userDescription
      avatarPath
      firebaseUserId
    }
  }
`


export default getUserInfo
