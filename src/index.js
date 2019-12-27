import * as adapter from './adapter/index';

const firstTwoMax = adapter.ary(Math.max, 2);
console.log([[2, 6, "a"], [6, 4, 8], [10]].map(x => firstTwoMax(...x)));

const Pall = adapter.collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log);
