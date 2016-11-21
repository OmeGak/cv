#!/usr/bin/env node
'use strict';

var fs = require('fs');
var pdf = require('html-pdf');
var sass = require('node-sass');
var nunjucks = require('nunjucks');
var path = require('path');


// -- Render SASS --------------------------------------------------------------

var scssInPath = 'assets/style.scss';
var scssOutPath = 'assets/static/style.css';

sass.render({
  file: scssInPath,
  outFile: scssOutPath
}, function handleSassRender(err, res) {
  if (err) { return console.log(err); }
  fs.writeFile(scssOutPath, res.css, function(err) {
    if (err) { return console.log(err); }
    console.log(scssOutPath);
  });
});


// -- Generate HTML ------------------------------------------------------------

nunjucks.render('cv.njk', function handleNunjucksRender(err, res) {
  if (err) { return console.log(err); }
  var path = 'cv.html';
  fs.writeFileSync(path, res);
  console.log(path);
  generatePdf(path);
});


// -- Generate PDF -------------------------------------------------------------

function generatePdf(htmlPath) {
  var html = fs.readFileSync(htmlPath, 'utf8');
  var options = {
    format: 'Letter',
    base: 'file://' + path.resolve(htmlPath)
  };

  pdf.create(html, options).toFile('cv.pdf', function handlePdfCreate(err, res) {
    if (err) { return console.log(err); }
    console.log(res);
  });
}
