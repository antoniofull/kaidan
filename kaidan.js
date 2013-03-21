/**
 * Created with JetBrains PhpStorm.
 * Author Antonio Fullone : http://lastwebdesigner.com
 * Date: 3/18/13
 * Time: 19:46 PM
 * Simple casperjs script to grab screenshots of different web pages in various viewports.
 */

// prepare the casper script. Ref:  http://casperjs.org/api.html#casper.options
var system = require('system'),
    file = require("fs").open('urls.txt',"r"),
    line = file.readLine(),
    casper = require('casper').create({
        logLevel : "warning",
        verbose : true,
        pageSettings : {
            loadPlugins: true,
            localToRemoteUrlAccessEnabled : true
        }
    });
// Read the file from url.txt
// Split it in an array that contains each new line.
// Create the folder where save the screenshots.
var urls = file.read();
var lines = urls.split('\n');
var folderPath ="Screenshots/";

// Array of various viewports. Change as your need.
// Height is not really needed unless you want a fixed height. Then you can clip it -> ref : http://casperjs.org/api.html#casper.capture
var viewports =
        [
            {w:320,h:480},
            {w:480,h:640},
            {w:800,h:600},
            {w:1024,h:768},
            {w:1440,h:960},
            {w:1920,h:1080}
        ]

//start casper and grabbing a new screenshot from each page.
//I use the title of the page to name it using casper.getTitle().
casper.start().each(lines,function(self,link){
    if(link == ''){
        this.echo("no url's in the list, add the url to the file!");
        casper.die("add the url's to the file urls.txt");
    }
    else{
    self.thenOpen(link,function(){
        viewports.forEach(
            function(doc){
                casper.echo(name);
                casper.viewport(doc.w,doc.h);
                var title = casper.getTitle();
                title = title.replace(/ /g,'_');
                title = title.toLowerCase();
                casper.echo("Opening : " + casper.getCurrentUrl() + "resolution :" + doc.w);
                casper.capture(folderPath + title + "_" + doc.w + ".png");
            }
        )
    })
    }
});
casper.run();
