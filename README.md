# Given-Sweet

This is mostly just me experimenting with the feasibility of using [sweet.js](https://github.com/mozilla/sweet.js) macros to create a ["Given"'like DSL](https://github.com/searls/jasmine-given) for testing.

## Sample Output so far

from `lib/given.js` as a sweet macro module and run against `spec/sanity.js`

```
describe "adding" {
  context "adding 1" {
    Given -> x = 5
    When  -> x += 1
    Then  -> x == 6
  }
}
```

```
console.log('adding');
console.log('adding 1');
x = 5;
x += 1;
require('assert')(x == 6);
```
