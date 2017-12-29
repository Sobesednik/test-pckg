const assert = require('assert')
const context = require('../context/')
const testPckg = require('../../src/')

const testPckgTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPckg, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPckg()
        })
    },
}

module.exports = testPckgTestSuite
