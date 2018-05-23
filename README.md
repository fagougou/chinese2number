# chinese2num
Convert Chinese Number to Arabic Number

将中文数字转换成阿拉伯数字

It supports both Simplified Chinese and Traditional Chinese.

目前支持简体中文及繁体中文。

It will support the slang and money description in the future.

将进一步支持更多的中文数字惯用语和金额的描述等

## Install
```
npm install chinese2num
```

## Examples
```javascript
var chinese2num = require('chinese2num');

var number1 = chinese2num('一千零一');
assert(number1, 1001);

var number2 = chinese2num('五十九亿三百八十万零三');
assert(number2, 5903800003);

var number3 = chinese2num('二十三点四九');
assert(number3, 23.49)

```

# DONE

1. 支持小数 (e.g. 三十五点五)

2. 支持负数 (e.g. 负五)

3. 支持整数转换




## TO-DO

1. 支持中文惯用语转换 (e.g. 四万三 => 43000)

2. 金钱描述 (e.g. 三块五, 五十万, 三十五元五角, 五毛八分)
