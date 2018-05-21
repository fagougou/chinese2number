const chinese2num = require('../lib/index')
const chai = require('chai')
const should = chai.should()

describe('salary parse', () => {
    it('should be 43000', () => {
        const number = chinese2num('四万三千')
        number.should.be.equal(43000)
    })

    it('should be 505813', () => {
        const number = chinese2num('五十萬五千八百一十三')
        number.should.be.equal(505813)
    })

    it('should be 6835605481', () => {
        const number = chinese2num('六十八亿三千五百六十万五千四百八十一')
        number.should.be.equal(6835605481)
    })

    it('should be 5', () => {
        const number = chinese2num('五')
        number.should.be.equal(5)
    })

    it('should be 4', () => {
        const number = chinese2num('四')
        number.should.be.equal(4)
    })

    it('should be 0', () => {
        const number = chinese2num('零')
        number.should.be.equal(0)
    })

    it('should be 55', () => {
        const number = chinese2num('五十五')
        number.should.be.equal(55)
    })
})
