
bitmex-bin-size [![Build status](https://travis-ci.org/strong-roots-capital/bitmex-bin-size.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bitmex-bin-size) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/bitmex-bin-size.svg)](https://npmjs.org/package/@strong-roots-capital/bitmex-bin-size) [![codecov](https://codecov.io/gh/strong-roots-capital/bitmex-bin-size/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/bitmex-bin-size)
========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Type definition for BitMEX's concept of bin size

Install
-------

```shell
npm install @strong-roots-capital/bitmex-bin-size
```

Use
---

```typescript
import BinSize from '@strong-roots-capital/bitmex-bin-size'
const binSizes: BinSize[] = ['1m', '5m', '1h', '1d']
```

The `BinSize` type is defined as

```typescript
/**
 * Type matching timeframes recognized by BitMEX exchange's API.
 */
type BinSize = '1m' \| '5m' \| '1h' \| '1d'
```

Acknowledgments
---------------

*   [BitMEX REST API Explorer](https://www.bitmex.com/api/explorer/)

## Index

---

