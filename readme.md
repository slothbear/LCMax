## Farmville Live Chat Window Too Small!
## And too many ads in the column!

### before:
![tiny chat window](images/tiny_chat.png)

* Close your Farmville window.
* Drag the link below (labeled "LCmax") to your bookmark bar
(or anywhere in your bookmarks).
  * NOTE: Don't click the link. That does nothing. Drag it!
  * If that doesn't make sense watch this [tutorial video](https://www.youtube.com/watch?v=-E6h7Z5fPlg) that demonstrates the dragging process.

<a href="javascript: var styleElement = document.createElement('style');document.head.appendChild(styleElement);var styleSheet = styleElement.sheet;styleSheet.insertRule('._3ss {display: none;}');styleSheet.insertRule('.uiScrollableAreaWrap { max-height: 540px !important; }');">LCmax</a>

* Open Farmville (and wait for it to settle in).
* Click the **LCmax** bookmark in your bookmarks bar.

### after (watch the right column):
![tall chat window](images/tall_chat.png)

## not happy?

If LCmax doesn't work or you don't like it:

* Remove the bookmark from your bookmarks bar. Right click on the
**LCmax** bookmark, then choose Delete.
* Refresh your browser page to get a fresh copy.

Has **LCMax** stopped working? It's possible that Facebook has changed
something. Please describe the situation in a new [issue](https://github.com/slothbear/lcmax/issues)
and maybe I can fix it.

## code
You can edit the bookmark before you use it and inspect its contents
to see that it doesn't do anything nefarious. You'll probably want
to copy the next to a code editor for reformatting to make it easier
to read. Right click on the LCmax bookmark and click "Edit" to see the code. Most browsers display the code with the label "URL".

I've included a formatted copy of the code below.

```javascript
var styleElement = document.createElement('style');
document.head.appendChild(styleElement);
var styleSheet = styleElement.sheet;

<!-- Remove the game recommendation sections. -->
styleSheet.insertRule(
  '._3ss {display: none;}'
  );

<!-- Make the Live Chat window taller. -->
styleSheet.insertRule(
  '.uiScrollableAreaWrap { max-height: 540px !important; }'
  );
```

## technical details

Facebook displays lots of suggestions above the Farmville "Live Chat"
window, making the chat window quite short and difficult to use.

This browser bookmarklet inserts two CSS rules into the page:

* Hide the game recommendation section at the top of the right column.
* Change the size of the Live Chat window to take up most of the right column.

The CSS declarations use these class names from the page:

* .3ss (game recommendations)
* .uiScrollableAreaWrap (Live Chat)

The code in the bookmarklet is structured to make it as easy as
possible for a novice to understand (and change?). Most will not
change the bookmarklet but it is important to be as transparent
as possible regarding the actions taken since the user is trusting
the button to do stuff on their computer.

This bookmarklet is designed for the Farmville game page.
Please don't use it on other pages. If you do so by
accident, reload the page and all effects of the
bookmarklet will be banished.
