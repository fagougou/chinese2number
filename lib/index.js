const numbers = {
    '一': 1,
    '兩': 2,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9,
    '零': 0,
    '〇': 0
}

const float2numstring = (chiNumber) => {
    return chiNumber.split('').map(digit => numbers[digit] + "").join('')
}

const int2num = (chiNumber) => {
    const stack = []
    const separateUnits = {
        '萬': 10000,
        '億': 10000,
        '万': 10000,
        '亿': 10000
    }
    const units = {
        '仟': 1000,
        '千': 1000,
        '百': 100,
        '十': 10
    }
    

    if (chiNumber.length === 1) {
        return numbers[chiNumber]
    }

    let total = 0
    for (let i = 0; i < chiNumber.length; i++) {
        const current = chiNumber[i]
        if (current in units) {
            total += units[current] * (stack.pop() || 1)
        } else if (current in separateUnits) {
            total *= separateUnits[current]
            total += separateUnits[current] * (stack.pop() || 0)
        } else {
            stack.push(numbers[current] || current)
        }
    }
    if (total) {
        if (stack.length > 0) {
            const offset = String(total).match(/0*$/)[0].length - stack.length
            total += Number(stack.join('')) * Math.pow(10, offset)
        }
        return total
    } else {
        return Number(chiNumber)
    }
}

const chinese2number = (chiNumber) => {
    if (chiNumber.match('点')){
        const integerPart = chiNumber.split('点')[0]
        const floatPart = chiNumber.split('点')[1]
        return +(int2num(integerPart) + "." + float2numstring(floatPart))
    }else
        return int2num(chiNumber)
}



module.exports = chinese2number
