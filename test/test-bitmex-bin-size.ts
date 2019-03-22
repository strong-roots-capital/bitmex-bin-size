import test from 'ava'

/**
 * Library under test
 */

import BinSize from '../src/bitmex-bin-size'

test('should be importable', t => {
    const binSize: BinSize = '1m'
    t.pass()
})

test('should allow use in arrays', t => {
    const binSizes: BinSize[] = ['1m', '5m', '1h', '1d']
    t.pass()
})
