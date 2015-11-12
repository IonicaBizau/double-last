# double-last [![Support this project][donate-now]][paypal-donations]

Doubles the last letter.

## Installation

```sh
$ npm i double-last
```

## Example

```js
// Dependencies
var DoubleLast = require("double-last");

console.log(DoubleLast("coffe"));
// => "coffee"

console.log(DoubleLast("coffe", ["t"]));
// => "coffe"

console.log(DoubleLast("coffe", ["e"]));
// => "coffee"
```

## Documentation

### `DoubleLast(input, letters)`
Doubles the last letter.

#### Params
- **String** `input`: The input string.
- **Array** `letters`: An array of letters: if the last letter of the input is not found in this list, it will *not* be doubled.

#### Return
- **String** The modified string.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md