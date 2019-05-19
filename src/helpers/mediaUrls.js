
export const getVideoIdFromUrl = (videoUrl) => {
  let videoId = videoUrl.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  return videoId
}

export const getThumbFromMedia = (mediaUrl, type) => {
  if (type === 'IMAGE') {
    return mediaUrl
  }
  if (type === 'VIDEO') {
    return `https://img.youtube.com/vi/${getVideoIdFromUrl(mediaUrl)}/hqdefault.jpg`
  }
  return `https://s2.googleusercontent.com/s2/favicons?domain_url=${mediaUrl}`
}

export default getVideoIdFromUrl
