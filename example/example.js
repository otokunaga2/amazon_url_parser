#!/usr/bin/env node
const {parseUrl} = require('./../lib.js');


const amazonUrl = 'https://www.amazon.co.jp/Python%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8B-%E6%83%85%E5%A0%B1%E6%A4%9C%E7%B4%A2%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E4%BD%90%E8%97%A4-%E9%80%B2%E4%B9%9F/dp/4627818610/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=python+%E6%83%85%E5%A0%B1%E6%A4%9C%E7%B4%A2&qid=1612055190&s=books&sr=1-1';
const result = parseUrl(amazonUrl);
console.log(result);
