# grunt-css-important

> Adds !important tags to your CSS styles.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-important --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-important');
```

## The "css_important" task

### Overview
In your project's Gruntfile, add a section named `css_important` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_important: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.minified
Type: `Boolean`
Default value: `false`

If set to `true` CSS file output will be minified. If set to `false` CSS file output will not be minified, *even* if the input file was minified.


### Usage Examples

#### Default Options
In this example, src/style.css will be processed and output to dest/style.css with `!important` tags added to all of the styles. 

```js
grunt.initConfig({
  css_important: {
    options: {},
    files: {
      'dest/style.css': ['src/style.css'],
    },
  },
});
```

#### Custom Options
In this example, the destination file will be minified.

```js
grunt.initConfig({
  css_important: {
    options: {
      minified: true,
    },
    files: {
      'dest/style.css': ['src/style.css'],
    },
  },
});
```

### Multi Tasks
In this example running `grunt css_important:dist` will result in a minified output file and running `grunt css_important:dev` will result in an unminified output file.
```js
grunt.initConfig({
    css_important: {
        dist: {
            options: {
                minified: true
            },
            src: ['src/style.css'],
            dest: 'dest/style.css'
        },
        dev: {
            src: ['src/style.css'],
            dest: 'dest/style.css'
        }
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
