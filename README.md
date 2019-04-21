# LBCC-RMP-EXTENSION

This extension scrapes the Long Beach City College class schedule and the relevant Rate My Professor pages to display rate my professor scores in the extension pop up window for convenience while picking classes.

**This project was created for the BeachHacks 2019 Hackathon. Project is incomplete and currently facing several errors, mostly revolving arround attempting to return a string from an async function**

Important Note:
- We attempted to solve the issue of not being able to return from the async by simply placing everything nested where it needed to use things.
- comboscript.js is the attempt to create one script that scrapes LBCC, then feeds the names to the scraper for RMP, which then feeds objects to the script section that injects the new divs with professor data into the extension popup. 
- However, it suffers from several errors that have yet to be resolved, namely unresolved promise and that we aren't sure how to properly include the dependencies we are using when uploading as an extension to chrome.
