
# double-last

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/double-last.svg)](https://www.npmjs.com/package/double-last) [![Downloads](https://img.shields.io/npm/dt/double-last.svg)](https://www.npmjs.com/package/double-last) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Doubles the last letter.

## :cloud: Installation

```sh
$ npm i --save double-last
```


## :clipboard: Example



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

## :memo: Documentation


### `DoubleLast(input, letters)`
Doubles the last letter.

#### Params
- **String** `input`: The input string.
- **Array** `letters`: An array of letters: if the last letter of the input is not found in this list, it will *not* be doubled.

#### Return
- **String** The modified string.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)—Generate project names from given keywords.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
