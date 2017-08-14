# colored-snackbar

A super simple customizable angular snackbar module. Allows user to display custom colored snackbar in angular application.

[![NPM](https://nodei.co/npm/colored-snackbar.png?downloads=true)](https://www.npmjs.com/package/colored-snackbar/)

**[DEMO](http://www.aniket.co/labs/colored-snackbar/demo/)**

## Installation
Installing this module is pretty easy using npm:

```python
npm install colored-snackbar
```
Then just add the dependencies into HTML and inject the `coloredSnackbar` module into your angular application module:

In your `HTML`

```HTML
<link rel="stylesheet" href="../css/colored-snackbar.css">
<script src="../js/colored-snackbar.js"></script>
```
In your `module.js`

```javascript
angular.module('myApp', ['coloredSnackbar']);
```

## Usage
Use the colored snackbar attribute directive in any of your clickable element in your HTML.:

```HTML
<button type="button" colored-snackbar message="Colored Snack Bar"
        back-color="black" font-color="yellow" snack-time="3000" position="top" ng-click="showSnackbar()">
    Top Snackbar
</button>
```

Customizable options:

```HTML
<button type="button" colored-snackbar message="Colored Snack Bar"
        back-color="black" font-color="yellow" snack-time="3000" position="bottom" ng-click="showSnackbar()">
    Bottom Snackbar
</button>
```

## Options / Attributes

- **message**: [String] Message you want to display in snackbar.
- **back-color**: [String] Background color of snackbar, can be HEX value.
- **font-color**: [String] Font color of text in snackbar, can be HEX value.
- **position**: [String] Position where you want to display snackbar, two available i.e ‘top’ and ‘bottom’.
- **snack-time**: [Number] Display duration time of your snackbar. Default is 3 seconds.
- **showSnackbar**: [Function] To trigger colored snackbar, use it with ngClick.


## License
MIT
