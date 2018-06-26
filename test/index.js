const chinese2num = require('../lib/index')
const chai = require('chai')
const should = chai.should()

describe('number parse', () => {
    it('should be 43000', () => {
        const number = chinese2num('四万三千')
        number.should.be.equal(43000)
    })

    it('should be 10', () => {
        const number = chinese2num('十')
        number.should.be.equal(10)
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
    
    it('should be 2', () => {
        const number = chinese2num('两')
        number.should.be.equal(2)
    })

    it('should be 55', () => {
        const number = chinese2num('五十五')
        number.should.be.equal(55)
    })
    
    it('should be 34.23', () => {
        const number = chinese2num('三十四点二三')
        number.should.be.equal(34.23)
    })

    it('should be -5', () => {
        const number = chinese2num('负五')
        number.should.be.equal(-5)
    })

    it('should be -5.5', () => {
        const number = chinese2num('负五点五')
        number.should.be.equal(-5.5)
    })

    it('nothing should be 0', () => {
        const number = chinese2num('')
        number.should.be.equal(0)
    })

    it('should be 101', () => {
        const number = chinese2num('一百零一')
        number.should.be.equal(101)
    })

    it('should be 1001', () => {
        const number = chinese2num('一千零一')
        number.should.be.equal(1001)
    })

    it('should be 1020', () => {
        const number = chinese2num('一千零二十')
        number.should.be.equal(1020)
    })
    it('should be 1205', () => {
        const number = chinese2num('一千二百零五')
        number.should.be.equal(1205)
    })
   
    it('should be 200040', () => {
        const number = chinese2num('二十万零四十')
        number.should.be.equal(200040)
    })

    it('should be 10010050', () => {
        const number = chinese2num('一千零一万零五十')
        number.should.be.equal(10010050)
    })

    it('should be 10100050', () => {
        const number = chinese2num('一千零一十万零五十')
        number.should.be.equal(10100050)
    })

    it('should be 10001', () => {
        const number = chinese2num('一万零一')
        number.should.be.equal(10001)
    })

    it('should be 10021', () => {
        const number = chinese2num('一万零二十一')
        number.should.be.equal(10021)
    })

    it('should be 10021.34', () => {
        const number = chinese2num('一万零二十一点三四')
        number.should.be.equal(10021.34)
    })

    it('should be 1500000250', () => {
        const number = chinese2num('一十五亿零二百五十')
        number.should.be.equal(1500000250)
    })


})
