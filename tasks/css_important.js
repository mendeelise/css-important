/*
 * grunt-css-important
 * https://github.com/mendeelise/css-important
 *
 * Copyright (c) 2015 Mende Williams
 * Licensed under the none license.
 */

'use strict';

module.exports = function (grunt) {

  var rework = require('rework');
  var cssmin = require('cssmin');

  grunt.registerMultiTask('css_important', 'Adds !important tags to your CSS styles.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: '; '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function (filepath) {
        // Read file source.
        var src = grunt.file.read(filepath);

        var css = rework(src).use(function (values) {
          changeRules(values.rules);
        }).toString();

        if (options.minified) {
          css = cssmin(css);
        }

        // Write the destination file.
        grunt.file.write(file.dest, css);

        // Print a success message.
        grunt.log.writeln('File "' + file.dest + '" created.');
      });
    });

    // Fix nested rules
    function changeRules(rules) {
      rules.forEach(function (r) {
        if (r.declarations) {
          r.declarations.forEach(function (d) {
            var selector = d.parent.selectors;
            // This excludes sourcemap entries
            if (selector.indexOf('filename') === -1 && selector.indexOf('line') === -1) {
              // Don't add important twice
              if (d.value && d.value.indexOf('!important') === -1) {
                d.value += ' !important';
              }
            }
          });
        }
        if (r.rules) {
          changeRules(r.rules);
        }
      });
    }
  });


};
