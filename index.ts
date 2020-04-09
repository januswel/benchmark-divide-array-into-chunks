import * as Benchmark from 'benchmark'

import forVersion from './src/for'
import reduceVersion from './src/reduce'

const suite = new Benchmark.Suite

const src = Array.from({length: 1000})

suite.add('for version', () => {
  forVersion(src)
}).add('reduce version', () => {
  reduceVersion(src)
}).on('cycle', (event) => {
  console.log(String(event.target))
}).on('complete', function () {
  console.log(`Fastest is ${this.filter('fastest').map('name')}`)
})
.run({ async: true })
