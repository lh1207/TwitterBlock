# TwitterBlock
A website that ties into a ViolentMonkey script. I made this to prevent myself from accessing Twitter, a site I find to be degrading to my mental health.
[https://twitterblock.tiiny.site](https://twitterblock.tiiny.site)

## Usage

1. Install the Violent Monkey extension in your web browser.
2. Create a new script in the Violent Monkey extension.
3. Copy and paste the following script into the script editor:

```javascript
// ==UserScript==
// @name         Twitter Blocker
// @namespace    http://twitter.com
// @version      1.0
// @description  Block twitter locally on your own browser.
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Redirect to a different page or display an error message
    // when the blocked website is accessed
    window.location.href = 'https://twitterblock.tiiny.site'; // replacement website
})();
```

## Purposes
  - To avoid Elon Musk's ways
  - To avoid cancel culture
  - To avoid toxicity
