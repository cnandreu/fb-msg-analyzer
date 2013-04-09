# Getting Started

1. [Download your data from Facebook](https://www.facebook.com/help/212802592074644/)
2. `git clone`
3. Move `messages.html` from your Facebook data download to `fb-msg-analyzer/messages.html`
4. `cd fb-msg-analyzer/`
5. `npm install` or `npm install jsdom`
6. `node analyze.js` - Will turn the HTML comments inside `messages.html` into `data.json`. **This takes a while.**
7. Edit `FILTER_STRING = '[name]'` inside `words.js` to filter messages by author.
8. `node words.js` - Will print an array of words to `[name].json`
9. Copy the contents of `[name].json` to your clipboard (e.g. `cat [name].json | pbcopy` on a Mac)
10. Paste the contents of `[name].json` to [wordle.net](http://www.wordle.net/)