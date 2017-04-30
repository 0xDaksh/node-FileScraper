# Node-FileScraper

Created By Daksh, Licensed under MIT

Node FileScraper is a tool built on top of Node.js which allows you to directly download any file from a direct link and save it to your server for later accessand use or mirror for Faster Speeds on Downloading the same file.

# Usage

1. `npm install`
2. node index.js
3. You can send a http-get request (open the url in browser) to `/scraper` with 
query strings such as "?name=somefile.txt" and "&url=TheDownloadURL" and it would automatically save the file into the static directory.
