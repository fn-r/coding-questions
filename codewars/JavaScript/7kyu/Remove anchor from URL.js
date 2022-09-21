function removeUrlAnchor(url){
  if (url.includes('#')) {
    url = url.substring(0, url.indexOf('#'))
  }
  return url
}