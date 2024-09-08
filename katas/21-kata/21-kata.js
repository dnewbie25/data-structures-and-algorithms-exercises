var isSquare = function(n){
  if(n<0){
    return false
  }
  if(n===0){
    return true
  }
  const root = Math.sqrt(n)
  return (root-Math.floor(root))===0
}