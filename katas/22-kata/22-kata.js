function validatePIN (pin) {
  const regex = /[^0-9]/gi
  const nonNumbers = pin.toString().match(regex)
  
  if(nonNumbers){
    return false
  }
  if(pin.length===4 || pin.length === 6){
    return true
  }

  return false
}

console.log(validatePIN('-342421'));