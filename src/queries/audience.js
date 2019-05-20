import { gql } from 'apollo-boost'


export const getSubscribers = gql`
  query ($influencerId: ID) {
    commonUsers(where: { subscribedInfluencers_some: { id: $influencerId } }) {
      status
      id
      email
      name
      profileImage
      phoneNumber
    }
  }
`


export default getSubscribers
