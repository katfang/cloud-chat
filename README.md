## Cloud Chat Demo
Cloud chat is a realtime chat demo powered by [Firebase](https://www.firebase.com/). This example demonstrates how easy it is to create a realtime multi person chat client with javascript, html, and css. View the [live demo](https://live-cloud-chat.firebaseapp.com/).

![Preview of Cloud Chat](http://firebase.github.io/cloud-chat/images/demo.jpg)(https://live-cloud-chat.firebaseapp.com/)

## Basic Development
To use the demo follow the steps below:

1. Download or clone this repo
2. Open js/chat.js and replace the Firebase URL with one from your own account. You can [sign up for free](https://www.firebase.com/).
3. Open index.html in your browser and have fun!

## Tutorial Mode 
You can build your own chat. This goes through a couple phases, starting at 0. Clone or download the repo and open up [tutorial.html](https://github.com/katfang/live-cloud-chat/blob/master/tutorial.html) in the browser. You'll be adding code to [js/tutorial.js](https://github.com/katfang/live-cloud-chat/blob/master/js/tutorial.js), which starts at phase 0. All the UI is built, and just waiting for you to add the logic. 

1. [js/phase0.js](https://live-cloud-chat.firebaseapp.com/phase0.html) has no interesting logic. 
2. [js/phase1.js](https://live-cloud-chat.firebaseapp.com/phase1.html) adds chat capabilities. It can send and receive messages, and you can set the sender username. 
3. [js/phase2.js](https://live-cloud-chat.firebaseapp.com/phase2.html) adds social auth. You can authenticate with a social provider, and it will automatically grab the display name or user name.

## Advanced Development
This repo includes a great [gulp](http://gulpjs.com/) build process. If you run  [gulp](http://gulpjs.com/) the sass with get preprocessed, auto prefixed, minified, and opened automatically in your browser (Chrome). The page will also auto refresh anytime you make changes to js, scss, html, or images. This makes development fast and easy. To setup this environment please follow the steps below:

1. Download or clone this repo
2. Make sure you have [node.js](http://nodejs.org/) installed.
3. From the command line in the root of the cloud-chat directory run ```npm install``` or ```sudo npm install``` (depending on your system permissions).
4. When that process successfully completes, on the command line run ```gulp```. When gulp is finished it will open a browser with the Chat Demo.
5. Anytime you modify files (scss, html, js, images) and save your changes the demo page will reload automatically! *Note: this does not apply to css, css is compiled from the Sass file. Edit the Sass file not the css file ;)*


## Photography License
The background photo used was taken by John Phelan and is available under the Creative Commons license. For more information on this photo and acceptable use, [click here](http://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology#mediaviewer/File:MIT_Building_10_and_the_Great_Dome,_Cambridge_MA.jpg). 

The San Francisco image in the folder was taken by Brocken Inaglory and is available under the Creative Commons license.
For more information on this photo and acceptable use please visit [Wikimedia Commons](http://commons.wikimedia.org/wiki/File:Golden_Gate_Bridge,_San_Francisco_and_Sutro_Tower.jpg).

## Repository License
MIT - [http://firebase.mit-license.org](http://firebase.mit-license.org)
