# aurelia-converters

Repository containing useful and common aurelia converters.

[![Build Status](https://travis-ci.org/sio-ag/aurelia-converters.svg?branch=master)](https://travis-ci.org/sio-ag/aurelia-converters)

### Installation

Install depending on package manager:

`npm install @sio/aurelia-converters`

Plugin depends on `moment` for date formatting and `numeral` for number formatting.

Add plugin to aurelia in main.js:

`.plugin('@sio/aurelia-converters')`

### Usage

#### Date

```
Default format
${ '1995-12-25 17:00' | date}
// 12/25/1995 5:00 PM

Specify format
${ '1995-12-25 17:00' | date:'LT'}
// 5:00 PM
```

Input can be anything `moment` accepts. Locale can be changed globally on moment.

#### Filesize

```
${ 127000 | filesize }
// 127.00 Kb
```

Pass parameter format to overwrite default format.

#### Integer

```
${ 127.23 | integer }
// 127
```

Pass parameter format to overwrite default format.

#### Number

```
${ 127.23 | number }
// 127.23
```

Pass parameter format to overwrite default format.

#### Percentage

```
${ 0.22 | percentage }
// 22.00 %
```

Pass parameter format to overwrite default format.

#### Time

```
${ 127 | time }
// 00:02:07
```

Pass parameter format to overwrite default format.

#### Truncate

```
${ 'long string' | truncate:4 }
// long...
```

Parameters:
1. Length
2. More string used, default `...`
3. What boundary character to use, default ` `, false to disable, cuts after last occurance of this character

#### Join

```
${ ['abc', 'def'] | join }
// abc, def
```

Pass parameter separator to overwrite default separator.

#### Keys

```
repeat.for="key of {abc: 'def', ghi: 'jkl'} | keys"
// [abc, ghi]
```

Useful for iterating objects using repeat.for

### Todo

- Global overwriting of default formats / parameters using plugin configuration

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
