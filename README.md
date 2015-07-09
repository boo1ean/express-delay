express-delay
=============

Delay express responses

## Use case

You want to test your fancy ajax loaders, spinners and stuff, but your dev machine is too damn fast for that shit!

## Usage

```javascript
var app = require('express')();
var delay = require('express-delay');

// Delay all responses for 1 second
app.use(delay(1000));

// Response will be delayed for 1 second
app.get('/', function(req, res) {
	res.send('Hello world!');
});

// ...
```

### Random delay

You can also give it a range of values, which will make the delay random:

```javascript
// Delay will be between 200 and 500 milliseconds
app.use(delay(200, 500));
```

## LICENSE
MIT
