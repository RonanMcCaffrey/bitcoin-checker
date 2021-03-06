# BitcoinChecker

This project is a simple webapp to display realtime bitcoin transactions,  using Angular, Websockets, and the Tabulator library.

## How To Run
To run this app, simply do a git clone on the code, or download the zip file, unzip it to a folder location, open the command line at that location and type:
npm install

then once all the required packages are installed type:
ng serve -o

A local browser window should appear and after a few seconds, bitcoin transactions should start to appear.

Alternatively, to view the app in action, simply enter: https://ronanmccaffrey.github.io/bitcoin-checker/ in your webbrowser and see it running via GitHub Pages!

## Further Improvements
* Use services to handle all the websocket implementation details, making it more modularised, enabling ability to mock up http endpoints for testing etc.
* Use charting libraries to visualise data.
* Add menu options to choose which currency to use, currently set to Euro.
