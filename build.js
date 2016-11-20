#!/usr/bin/env node
'use strict';

var fs = require('fs');
var pdf = require('html-pdf');
var sass = require('node-sass');
var path = require('path');


// -- Render SASS --------------------------------------------------------------

var scssInPath = 'assets/style.scss';
var scssOutPath = 'assets/static/style.css';

sass.render({
    file: scssInPath,
    outFile: scssOutPath
}, function(error, result) {
    if(!error){
        fs.writeFile(scssOutPath, result.css, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log(scssOutPath);
        });
    }
});


// -- Generate PDF -------------------------------------------------------------

var htmlPath = 'cv.html';
var html = fs.readFileSync(htmlPath, 'utf8');
var options = {
    format: 'Letter',
    base: 'file://' + path.resolve(htmlPath)
};

pdf.create(html, options).toFile('cv.pdf', function(err, res) {
    if (err) {
        return console.log(err);
    }
    console.log(res);
});
