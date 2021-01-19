/*
 * @Author: zfd
 * @Date: 2021-01-13 15:01:57
 * @LastEditors: zfd
 * @LastEditTime: 2021-01-13 16:02:31
 * @Description:
 */
var iconv = require('iconv-lite')

console.log(Buffer.from('html><\r\n'))
// var oriText = '1kg���ྻ����ϴ��Һ��޹�²��㣩'

// var encodedBuff = iconv.encode(oriText, 'gb2312')
// console.log(encodedBuff)
// { /* <Buffer c4 e3> */ }

// var decodedText = iconv.decode(encodedBuff, 'gb2312')
// console.log(decodedText)
// // 你

// var wrongText = iconv.decode(encodedBuff, 'gb2312')
// console.log(wrongText)
