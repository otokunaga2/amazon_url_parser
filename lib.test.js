const assert = require('assert');
const chai = require('chai')
,expect = chai.expect
, should = chai.should(); 
const {parseUrl:parseUrl} = require('./lib.js');

describe('parser unit test', function(){
	var testUrl;
	var testUrl2;
	beforeEach(function(done){
		testUrl = 'https://www.amazon.co.jp/gp/product/B01DEFQKLU/ref=vp_c_A3BO82SUYHHMY9?ie=UTF8&m=AN1VRQENFRJN5';
		testUrl2= 'https://www.amazon.co.jp/Python%E3%81%AB%E3%82%88%E3%82%8B%E5%8C%BB%E7%99%82%E3%83%87%E3%83%BC%E3%82%BF%E5%88%86%E6%9E%90%E5%85%A5%E9%96%80%E2%80%95%E2%80%95pandas%EF%BC%8B%E6%93%AC%E4%BC%BC%E3%83%AC%E3%82%BB%E3%83%97%E3%83%88%E7%B7%A8-%E9%9D%92%E6%9C%A8-%E6%99%BA%E5%BA%83-ebook/dp/B08DN7P1DN/?_encoding=UTF8&pd_rd_w=bVTNw&pf_rd_p=14c8160f-ffdc-4692-8875-d1b271eb736f&pf_rd_r=50K41AYBWSBYFNNKMJE0&pd_rd_r=2aeff0d6-374d-4b5c-bacd-cdbdc29ca17f&pd_rd_wg=hrdjA&ref_=pd_gw_wish'
		done();
	});

	it('check parser function', function(){
		let result = parseUrl(testUrl)
		assert(result, 'https://www.amazon.co.jp/gp/product/B01DEFQKLU/')
		let result2 =  parseUrl(testUrl2)
		assert(result2, 'https://www.amazon.co.jp/dp/B08DN7P1DN/')
	});
	it('check anormal input', function(){
		//expect(() => parseUrl(1)).to.throw(new Error('Unexpected input type, expected string but got number'))
		expect(() => parseUrl(1)).to.throw(Error)
		expect(() => parseUrl([])).to.throw(Error)
		expect(() => parseUrl({})).to.throw(Error)
	});
});
