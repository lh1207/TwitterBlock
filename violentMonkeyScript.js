// ==UserScript==
// @name         Twitter Block
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