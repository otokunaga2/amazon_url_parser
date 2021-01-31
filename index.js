#!/usr/bin/env node
const {parseUrl} = require('./lib.js');
const { Command } = require('commander');

const program = new Command();
program
  .requiredOption('-u, --url <type>', 'parsing target URL');

program.parse(process.argv);
const options = program.opts();
if (options.debug) console.log(options);
console.log('http details:');
if (options.url) {
	//console.log(`- ${options.url}`)
	const result = parseUrl(options.url);
	console.log(`Result: ${result}`)
}


