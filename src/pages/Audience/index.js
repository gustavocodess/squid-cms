import React from 'react'
import get from 'lodash.get'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { getUserInfo } from '../../queries/user'

const Audience = ({ data }) => {
  console.log('DATA FROM USER ', data.influencer)
  return (
    <div>
      <h2>Audience</h2>
    </div>
  )
}


Audience.propTypes = {
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
})(Audience)
