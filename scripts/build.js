#!/usr/bin/env node
'use strict'

var fs = require('fs')
var fontAwesome = require('node-font-awesome')
var gulp = require('gulp')
var nunjucks = require('nunjucks')
var path = require('path')
var sass = require('node-sass')


// -- Font-Awesome -------------------------------------------------------------

var fontAwesomeScss = path.join(fontAwesome.scssPath, '*')

gulp.src(fontAwesome.fonts).pipe(gulp.dest('assets/fonts'))
gulp.src(fontAwesomeScss).pipe(gulp.dest('assets/sass/font-awesome'))


// -- Render SASS --------------------------------------------------------------

var scssInPath = 'assets/style.scss'
var scssOutPath = 'assets/static/style.css'

sass.render({
  file: scssInPath,
  outFile: scssOutPath
}, function handleSassRender(err, res) {
  if (err) { return console.log(err) }
  fs.writeFile(scssOutPath, res.css, function(err) {
    if (err) { return console.log(err) }
    console.log(scssOutPath)
  })
})


// -- Generate HTML ------------------------------------------------------------

nunjucks.render('cv.njk', function handleNunjucksRender(err, res) {
  if (err) { return console.log(err) }
  var path = 'cv.html'
  fs.writeFileSync(path, res)
  console.log(path)
})
