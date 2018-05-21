# chinese2number
Convert Chinese Number to Arabic Number (将中文数字转换成英文)

It supports both Simplified Chinese and Traditional Chinese.

## Install
```
npm install chinese2number
```

## Examples
```
var chinese2digit = require('chinese2number');

var number1 = chinese2digit('一千零一');
assert(number1, 1001);

var number2 = chinese2digit('五十九亿三百八十万零三');
assert(number2, 5903800003);

var number3 = chinese2digit('二十三点四九');
assert(number3 = 23.49)

```
