class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9]+/g, '')
  }

  static titleize(str){
  let wordArr= ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    if (!wordArr.includes(str[i]) || i === 0){
      str[i] = Formatter.capitalize(str[i]);
    }
  }
  return str.join(' ');
  }
}