# 30th Kata -- Extract the domain name from a URL





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```js
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
```


## Test Examples

```js
const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})

```


## Notes

This one was difficult, the regular expression was a bit tricky to write.

## My solution with comments:

```js
function domainName(url) {
  // creates a regular expression that separates the URL into groups
  const re = /(https?:\/\/)?(www.)?([a-z0-9\-]+)(\.)(\w+)/i
  // removes https or https and the elements that have a dot
  let arr = url.match(re).filter(item => item && !item.includes('.') && !item.includes('http'))
  // the first element should be the domain name
  return arr[0]
}
```


## Results

```js

Time: 747ms Passed: 41Failed: 0
Test Results:
Basic test
Should pass basic tests
Completed in 1ms
Random tests
Testing for voyaw.net/error
Testing for http://n0r-sxos-8.br/img/
Testing for http://www.pznvogzflg-mroh.biz/
Testing for https://laxlxod-rgh3hl6ysjhbxmyc.com/archive/
Testing for https://www.7w7-i0la7kc2ll2p.co/warez/
Testing for http://aqi2do605mbrc8f.de/archive/
Testing for http://8hsm1d98ldw7h6dafsqvldsrs9w1.it/users
Testing for http://www.lqfi-wir1ptryx73fbg0d74rqnlrw.com/index.php
Testing for https://7t09b9r5qh5c9mk.tv/default.html
Testing for http://www.toe9zgobe3i.org/error
Testing for https://lk5340ztldhdpk.net/users
Testing for https://www.qpms1gsc2mugkpcmwpp21hxkdkti5h.net/archive/
Testing for 2gm4665qnkv9ec27l2t7m.it/warez/
Testing for 141bpmyjfophl1s8xxsia26ad0gj2.jp/warez/
Testing for https://ffsg8zsjnhb4.com
Testing for https://2i35phmwqscuppvc.br
Testing for http://97yrj5xf6ea6fb8nj49z56jkq6dve.co.za/index.php
Testing for http://8v05m1aw.info
Testing for 2u12z10cei.info/default.html
Testing for https://www.q-ibmov9ycpc.co.za/warez/
Testing for http://bszq5eo08b2njpua.de
Testing for or6q4c0dlkgmtx-0xcy.tv/img/
Testing for http://www.aa5dwh9ij0qvx8r.org/archive/
Testing for k1sr7.org
Testing for https://tswtolet2ip7.tv/error
Testing for https://rgaibmc52usa.name
Testing for 74nkc4gp-q.com/img/
Testing for https://aw1qjpi5q4eioomwueg4o.jp/users
Testing for mwstmovh5ma5s5cy3z-8a.jp
Testing for 2k67hhw6tjmzmy750.info/archive/
Testing for dc9ajfbikd48p.tv/default.html
Testing for http://knwwks0h50dxrx5fwxm8z.edu/
Testing for rj0i0-5nb9dp8prj1r9cfdq02mto.jp/default.html
Testing for https://65lkyc4vachrccwy8ic56cn7.tv/default.html
Testing for http://www.imfxn7xpujuwjnkssu5wf17.biz/warez/
Testing for qh9v4div.co/warez/
Testing for https://ws6gb9m59havea-8ws.fr/img/
Testing for https://www.zn-j6fdcvb8k.edu
Testing for http://jlofr64tpuk1-oocqpbasbuzx.edu/error
Testing for https://www.k6t5kz9jou1e6qxor632zw-v7.info/error
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[sow4063@gmail.com](https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/57f2f96fc0bb25012f000c62)*

```js
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
```

## Notes about the interesting one:

It does the same as my regular expression, but it is more simple and elegant, although it modifies the original input, it should create a copy to modify.

---