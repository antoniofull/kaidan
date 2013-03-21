Kaidan 
======
Kaidan is a simple script that uses a file as input for the url's and takes a screenshot of every page using the different resolutions.

How to use it
=============

Install [phantomjs](https://code.google.com/p/phantomjs/wiki/Installation) and [casperjs](http://casperjs.org/installation.html).Copy kaidan.js and urls.txt in a folder, open urls.txt and add the pages you want to test, separated in a new line.

http://www.lastwebdesigner.com

http://www.antoniofullone.it

Then open the terminal go to the folder with kaidan and run the script using casperjs kaidan.js. It will save all the screenshots in a folder and name each image in this : page_title_width.png
The resolutions are managed in an array that can be modified depending on your needs.

`var viewports =
        [
            {w:320,h:480},
            {w:480,h:640},
            {w:800,h:600},
            {w:1024,h:768},
            {w:1440,h:960},
            {w:1920,h:1080}
        ]`

You can check this [article](http://lastwebdesigner.com/web-design/screenshots-with-casperjs-for-responsive-webdesign.html) for more info.

Problem with external fonts
===========================
I could not make the scritp work with external fonts loaded by typekit, the screenshot is rendered using the fallback font.

License
=======
There is no license since is a simple script. Anyone can use it with no restrictions. 

Why the name
========
Is a simple script, not a project, but I needed to name the js file, so inspired by the word phantom and casper, I called [kaidan](http://en.wikipedia.org/wiki/Kaidan).

Suggestions 
===========
I'm open to any suggestion on how to improve the script.
I'd like to solve the problem with the external fonts, any suggestion is welcome.