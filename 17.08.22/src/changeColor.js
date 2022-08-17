function changeColor(str, oldColor, newColor, withCase) {
    if (typeof str !== 'string') {
        return ''
    }

    const strArr = str.split(' ')

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === oldColor) {
            strArr[i] = newColor
        }
    }
   return strArr.join(' ')

  }

  module.exports = changeColor;