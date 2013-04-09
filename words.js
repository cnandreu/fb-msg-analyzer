/*global require */

'use strict';

var FILTER_STRING = 'Carlos Andreu',
	MAX_WORD_SIZE = 2,
	FILTER_URLS = true,
	//OUTPUT_PATH is something like 'carlosandreu.json'
	OUTPUT_PATH = './'+FILTER_STRING.toLowerCase().replace(/ /g,'')+'.json',

	//INPUT_PATH is generated with analyze.js
	INPUT_PATH = './data.json',

	messages = require(INPUT_PATH),
	fs = require('fs'),

	multiReplace = function (str, match, repl) {
		do {
			str = str.replace(match, repl);
		} while(str.indexOf(match) !== -1);
		return str;
	},
	trim = function (stringToTrim) {
		return stringToTrim.replace(/^\s+|\s+$/g,'');
	},

	words = [],
	msg = '',
	author = '',
	word = '',
	arr = [],
	len = 0;

messages.forEach(function(current){

	msg = current.data.msg,
	author = current.data.author;

	if (author === FILTER_STRING) {

		arr = msg.split(' ');
		len = arr.length;

		while (len--) {

			word = trim(multiReplace(arr[len], '\n', '').toLowerCase());

			if (word.length > MAX_WORD_SIZE ) {

				if (FILTER_URLS) {

					//Push to the words array if http and www don't match the current word
					if ((word.indexOf('http') < 0) && (word.indexOf('www') < 0)) {
						words.push(word);
					}

				} else {

					//Not filtering, push the current word
					words.push(word);
				}

			}

		}//end while

	}//end FILTER_STRING if statement

});//end forEach

console.log(words);
fs.writeFileSync(OUTPUT_PATH, words);