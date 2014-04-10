# angular-prompt

> Angular service to easily display prompt and confirmation modals.

This library depends on [angular-ui-bootstrap](https://github.com/angular-ui/bootstrap).  

## Demo

[Live Demo](http://cgross.github.io/angular-prompt/demo)

## Getting Started

Install with Bower or download the the files directly from the dist folder in the repo.
```bash
bower install angular-prompt --save
```

Add `dist/angular-prompt.js` to your index.html.  

Add `cgPrompt` as a module dependency for your module.

```js
angular.module('your_app', ['ui.bootstrap','cgPrompt']);
```

Now you can inject and use the `prompt` service.

```js
function MyCtrl($scope, prompt) {

  //simple confirmation
  prompt({
    title: 'Delete this Thing?',
    message: 'Are you sure you want to do that?'
  }).then(function(){
    //he hit ok and not cancel
  });

  //ask the user for a string
  prompt({
    title: 'Give me a name',
    message: 'What would you like to name it?',
    input: true,
    label: 'Name',
    value: 'Current name',
    values: ['other','possible','names']
  }).then(function(name){
    //the promise is resolved with the user input
  });  
}
```

## API

### prompt(options);

 - #### options.title
 Type: `String`  
 Default: `''`
 The title for the dialog.

 - #### options.message
 Type: `String`  
 Default: `''`  
 The message inside the dialog.

 - #### options.input
 Type: `Boolean`  
 Default: `false`  
 Set to `true` if you wish to prompt the user for a text value.

 - #### options.label
 Type: `String`  
 Default: `''`  
 The label for the input if `input=true`.

 - #### options.value
 Type: `String`  
 Default: `''`  
 The initial value of the input if `input=true`.

 - #### options.values
 Type: `Array` of `String`  
 Default: `undefined`  
 A list of values available in a dropdown for the user to select as the input value.

 - #### options.buttons
 Type: `Array` of `Object` with properties `label`,`cancel`, and `primary`  
 Default: `[{ label:'OK', primary: true }, { label:'Cancel', cancel: true }]`  
 A list of the buttons to display on the dialog.

The function returns a promise.  That promise is resolved with either the button that was pressed, or in the case of input prompts, the value the user entered.  If the user pressed a button where `cancel=true` or canceled the dialog another way (hit ESC, etc) then the promise is rejected.

## Release History
 * v1.0.0 - Initial release.
