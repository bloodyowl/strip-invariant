# strip-invariant

[![Build Status](https://travis-ci.org/bloodyowl/strip-invariant.svg?branch=master)](https://travis-ci.org/bloodyowl/strip-invariant)

## install

```console
$ npm install bloody-strip-invariant
```

## what it does

for production use, you don't need `invariant` to have formatted messages.

```javascript
invariant(
  value != null,
  "expected a value, got %s",
  value
)
```

will be transformed into

```javascript
invariant(value != null)
```

## usage

```console
$ babel --plugins bloody-strip-invariant source.js
```

## [license](LICENSE)
