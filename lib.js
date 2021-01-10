"use strict";
/***
parse amazon url as simple https://www.amazon.co.jp/dp/XXXX
@url stirng amazon web cite url
@returns string simplified url string
 ***/
function parseUrl(url){
	if (!typeof(url) == 'string'){
		throw Error(`Unexpected input type, expected string but got ${typeof(url)}`)
	}
	let re = /^(https:\/\/www\.amazon\.co\.jp\/).*(dp|gp\/)(.*\/)/g;
	const resultArray = [...url.matchAll(re)];
	let urlStr;
	try{
		urlStr = resultArray[0][1]+resultArray[0][2]+resultArray[0][3];
		return urlStr;
	}catch(error){
		throw Error('Invalid url parsing error');
	}
}

module.exports = {
	parseUrl: function(s){
		return parseUrl(s)
	},
	checkUrlFormat: function(s){
		return checkUrlFormat(s);

	}
}
