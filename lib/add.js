const splitLength = (Number.MAX_SAFE_INTEGER + '').length - 1

/**
 * 大整数相加 不限长度
 * @param {NumberString} numberStr1
 * @param {NumberString} numberStr2
 */
function add(numberStr1, numberStr2) {
  // 实现该函数
  let numberStr1Arr = getNumArr(numberStr1, splitLength)
  let numberStr2Arr = getNumArr(numberStr2, splitLength)
  let len = Math.max(numberStr1Arr.length, numberStr2Arr.length)
  let addOne = 0 // 是否进1
  let result = ''
  for (let i = 0; i < len; i ++) {
    let num1 = numberStr1Arr[i] || 0
    let num2 = numberStr2Arr[i] || 0
    let resTemp = num1 + num2 + addOne
    if ((resTemp + '').length > splitLength) {
      resTemp = resTemp.toString().substr(1)
      addOne = 1
    } else {
      addOne = 0
    }
    result = resTemp + result
  }
  return result
}

/**
 * 长数字 分段
 * numStr = '123456789' splitLength = 4
 * => [[9,8,7,6], [5,4,3,2], [1]]
 * => [6789, 2345, 1]
 * @param {*} numStr
 * @param {*} splitLength
 */
function getNumArr (numStr, splitLength) {
  let accIndex = -1
  return numStr.split('').reverse().reduce((acc, item, index) => {
    if (index % splitLength === 0) {
      accIndex ++
      acc[accIndex] = [item]
    } else {
      acc[accIndex].push(item)
    }
    return acc
  }, [[]]).map(item => {
    return + item.reverse().join('')
  })
}
module.exports = add