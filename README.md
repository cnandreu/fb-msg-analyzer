# Getting Started

1. [Download your data from Facebook](https://www.facebook.com/help/212802592074644/)
2. [Install Node.js](http://nodejs.org/)
3. `git clone` this repository
4. Move `messages.html` from your Facebook data download to `fb-msg-analyzer/messages.html`
5. `cd fb-msg-analyzer/`
6. `npm install` or `npm install jsdom`
7. `node analyze.js` - Will turn the HTML comments inside `messages.html` into `data.json`. **This takes a while.**
8. Edit `FILTER_STRING = '[name]'` inside `words.js` to filter messages by author.
9. `node words.js` - Will print an array of words to `[name].json`
10. Copy the contents of `[name].json` to your clipboard (e.g. `cat [name].json | pbcopy` on a Mac)
11. Paste the contents of `[name].json` to [wordle.net](http://www.wordle.net/create)

# Examples

![image](https://s3.amazonaws.com/f.cl.ly/items/17433t1x1b1K1h0r2W3k/Screen%20Shot%202013-04-08%20at%2010.04.26%20PM.png)

![image](https://s3.amazonaws.com/f.cl.ly/items/0K1Q2y2J2X3l1C0t221k/Screen%20Shot%202013-04-08%20at%2010.04.36%20PM.png)

![image](https://s3.amazonaws.com/f.cl.ly/items/241L2K1G0T1u00431i2h/Screen%20Shot%202013-04-08%20at%2010.04.44%20PM.png)

# MIT License

Copyright (c) 2013 Carlos Andreu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.