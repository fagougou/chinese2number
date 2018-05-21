const chinese2digit = require('../lib/index')
const chai = require('chai')
const should = chai.should()

describe('salary parse', () => {
    it('should be 43000', () => {
        const number = chinese2digit('四万三千')
        number.should.be.equal(43000)
    })

    it('should be 505813', () => {
        const number = chinese2digit('五十萬五千八百一十三')
        number.should.be.equal(505813)
    })

    it('should be 6835605481', () => {
        const number = chinese2digit('六十八亿三千五百六十万五千四百八十一')
        number.should.be.equal(6835605481)
    })
})
