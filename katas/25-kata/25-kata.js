function XO(str) {
  //code here
 let obj = {'x':0,'o':0}
 const re = /[xo]/gi;
 let result = str.toLowerCase().match(re)
 if(!result){
  return true
 }
 result.forEach(letter => {
  if(obj.hasOwnProperty(letter)){
    obj[letter]+=1
  }
 });
 if(obj.x===obj.o){
  return true
 }
 return false
 
}