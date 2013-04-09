/*global require, window */

var OUTPUT_PATH = './data.json',
	JQUERY_PATH = './jquery-1.9.1.min.js',
	MESSAGES_PATH = './messages.html',
	jsdom = require('jsdom'),
	fs = require('fs'),
	jquery = fs.readFileSync(JQUERY_PATH).toString(),
	messages = fs.readFileSync(MESSAGES_PATH);

jsdom.env({

	html: messages,

	src: [jquery],

	done: function (errors, window) {

		'use strict';

		var $ = window.$,
			data = [],
			$msg,
			author,
			date,
			msg;

		$('.message').each(function(idx, message){
			$msg = $(message);
			msg = $msg.find('.msgbody').text();
			author = $msg.find('.profile').text();
			date = $msg.find('.time').attr('title');
			data.push({data: {
				msg : msg,
				author : author,
				date : date
			}});
		});

		fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data));
	}

});