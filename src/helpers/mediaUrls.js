
export const getVideoIdFromUrl = (videoUrl) => {
  let videoId = videoUrl.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  return videoId
}

export default getVideoIdFromUrl
