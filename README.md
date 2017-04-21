Sass-Themify
============
Sass-Themify is a sass library that comes with a set of mixins and functions to help you easily manage multiple color(or variable) themes.

### Usage

##### main.scss
```scss
@import "sass-themify";
@import "box";

//define a theme map
$theme-map: (
  'default':(
    'text-color':black,
    'background-color':white
  ),
  'red':(
    'text-color':red,
    'background-color':white
  ),
  'blue':(
    'text-color':blue,
    'background-color':white
  )
);
//call initialize mixin with the theme-map variable
@include sass-themify-init($theme-map);

```
Then in your other scss component file:

##### box.scss
```scss

#box{
  width: 100px;
  height: 100px;
  display: table;
  #text{
    display: table-cell;
    vertical-align: middle;
    text-align: center;;
    font-size: 12px;
  }
}

//all color related styling goes below within the sass-themify mixin ( you can even put this in a seperate file if you like )
@include sass-themify(){
  #box{
    background-color: sass-themify-get-color("background-color");
    #text{
      color: sass-themify-get-color("text-color");
    }
  }
};

```

Now everytime you append a theme name to body's class, ie. 
```html
<body class="red">...</body>
```

`sass-themify-get-color` will get the corresponding variable name fed into the function from `$theme-map`. 

Here's a demo on CodePen: [Codepen Demo](https://codepen.io/gone369/pen/vmGaNd)

It's that simple!

The advantages in managing your themes this way is that you are able to seperate out color styling code into seperate components while having a single point of management for your color schemes in a hash/map-like format.

### Setup and Installation

The simplest way is to just clone the repo and include `sass-themify.scss` as a partial from your main scss file. 

##### NPM
`npm install sass-themify`

##### Webpack Config
usage with webpack and sass-loader 
```javascript
var path = require("path");

  ...
  module: {
    rules: [
      ...
      {
        test:/\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, "../node_modules/sass-themify"),
              ]
            }
          }
        ]
      }
    ]
  }
  ...
```
then you should be able to just do 
```scss
@import "sass-themify"
```
in your scss file
 
a full working example is in the [test folder](https://github.com/gone369/sass-themify/tree/master/test)

If you like it please support me by giving me a star!






