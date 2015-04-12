/**
 * Created with JetBrains PhpStorm.
 * Author Antonio Fullone : http://lastwebdesigner.com
 * Date: 3/18/13
 * Time: 19:46 PM
 * Simple casperjs script to grab screenshots of different web pages in various viewports.
 */
(function(){
    "use strict";

    var kaidan = {
        version: '1.1.0',
        viewports: [
            {w:320,h:480},
            {w:480,h:640},
            {w:800,h:600},
            {w:1024,h:768},
            {w:1440,h:960},
            {w:1920,h:1080}
        ],

        init: function() {
            this.casper = require('casper').create({
                logLevel : "warning",
                verbose : true,
                pageSettings : {
                    loadPlugins: true,
                    localToRemoteUrlAccessEnabled : true
                }
            });

            var fs = require('fs');
            var data = fs.read('urls.txt');
            this.takeScreenshots(data);

        },   

        takeScreenshots: function(data) {
            var urls = data;
            var lines = urls.split('\n');
            var folderPath ="Screenshots/";
            var casper = this.casper;
            var viewports = this.viewports;

            casper.start().each(lines,function(self,link){
                if(link == ''){
                casper.die("add the url's to the file urls.txt");
                } else{
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
        }     
    };
    kaidan.init();
})();