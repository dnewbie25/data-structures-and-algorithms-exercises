function domainName(url) {
  const re = /(https?:\/\/)?(www.)?([a-z0-9\-]+)(\.)(\w+)/i
  let arr = url.match(re).filter(item => item && !item.includes('.') && !item.includes('http'))
  return arr[0]
}