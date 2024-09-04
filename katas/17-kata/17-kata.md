# 17th Kata -- Plus or Minus





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


In this task you are required to determine an expression consisting of variables and operators.

- The variables are all single lower-case alphabetic characters
- Each variable occurs only once in the expression
- The operators are either + or -
- There are no parentheses.

For example: `"x-y+z"` or `"-d-b-c+w"`

You must implement a function `plus_or_minus` which will be passed two parameters:

- `variables` : a string consisting of just the variables in the order that they appear in the expression. For example: `"xyz"` or `"dbcw"` (The length of the input string will be between `1` and `26` inclusive.)
- `test` : a test function which takes as its parameter a list of numeric values to be substituted for the variables in `variables`. The function will return the result of evaluation the expression.
You must return the expression with the variables in the same order as the input and with the correct operators inserted. Omit any leading + from the start of the expression.

```py
Example 1:

expression = "x-y+z"
variables = "xyz"
test([1, 2, 3]) = 2
Example 2:

expression = "-d-b-c+w"
variables = "dbcw"
test([3, 0, -1, 0.5]) = -1.5
```
Here's the catch: In each test case you may only call `test` once. Subsequent calls will return `None`


## Test Examples

```py

import codewars_test as test
from solution import plus_or_minus
import random

       
def test_factory(expr):
    called = False

    def test(vals):
        nonlocal called
        nonlocal expr
        
        if called:
            return None
        else:
            called = True
            if type(vals) != list:
                raise Exception ("test argument must be a list")

            if len(vals) > len(list(filter(str.isalpha, expr))):
                raise Exception ("too many values in test argument")

            if len(vals) < len(list(filter(str.isalpha, expr))):
                raise Exception ("not enough values in test argument")

            for v in vals:
                if type(v) != int and type(v) != float:
                    raise Exception ("test argument must be a list of numeric values")
            exp = list(filter(str.isalpha, expr))
            variables = {}
            for i in range(len(vals)):
                variables[exp[i]] = vals[i]
            return eval(expr, variables)

    return test


@test.describe("Fixed Tests")
def fixed_tests():
    @test.describe('Simple Test Cases')
    def basic_test_cases():
        @test.it("a")
        def _():
            test.assert_equals(plus_or_minus("a", test_factory("a")), "a")
        @test.it("-a")
        def _():
            test.assert_equals(plus_or_minus("a", test_factory("-a")), "-a")
        @test.it("p+q")
        def _():
            test.assert_equals(plus_or_minus("pq", test_factory("p+q")), "p+q")
        @test.it("p-q")
        def _():
            test.assert_equals(plus_or_minus("pq", test_factory("p-q")), "p-q")
        @test.it("-p-q")
        def _():
            test.assert_equals(plus_or_minus("pq", test_factory("-p-q")), "-p-q")
        @test.it("-p+q")
        def _():
            test.assert_equals(plus_or_minus("pq", test_factory("-p+q")), "-p+q")

    @test.describe('Longer expressions')
    def longer_expressions():
        @test.it("x-y+z")
        def _():
            test.assert_equals(plus_or_minus("xyz", test_factory("x-y+z")), "x-y+z")
        @test.it("-d-b-c+w")
        def _():
            test.assert_equals(plus_or_minus("dbcw", test_factory("-d-b-c+w")), "-d-b-c+w")
        @test.it("c-o-d-e+w-a-r-s")
        def _():
            test.assert_equals(plus_or_minus("codewars", test_factory("c-o-d-e+w-a-r-s")), "c-o-d-e+w-a-r-s")
        @test.it("a-b+c+d-e+f-g+h-i-j-k-l+m-n+o+p+q-r-s+t-u-v+w+x+y-z")
        def _():
            test.assert_equals(plus_or_minus("abcdefghijklmnopqrstuvwxyz", test_factory("a-b+c+d-e+f-g+h-i-j-k-l+m-n+o+p+q-r-s+t-u-v+w+x+y-z")), "a-b+c+d-e+f-g+h-i-j-k-l+m-n+o+p+q-r-s+t-u-v+w+x+y-z")



```


## Notes

This kata was very difficult. At least a 5 or 4 kyu. I was unable to pass all the tests, even though the algorithm works from what I understand it is supposed to do, but the exercises description does not match some test cases, so I don't know what am I supposed to correct. Only 60 solutions have been submitted, all of them in Python (mine as well). Very complicated solutions by the way

## My solution with comments:

```py
from itertools import product
def plus_or_minus(variables, test):
    length = len(variables)
    # gets the combinations of the numbers from -9 to 9 using products function from itertools
    # makes a combinatorics of the integers taking n-elements (equal to the length of the "variables" parameter)
    combination_numbers = product(range(-9,10),repeat=length)
    candidate = []
    # uses a set to verify that all items and different and their sum equal the "test" value
    for i in combination_numbers:
        if sum(i)==test and len(i)==len(set(i)):
            candidate = i
            break
    # puts the corresponding symbol based on the value of the number in the "candidate" list
    letters_value = dict()
    for i in range(len(candidate)):
        letters_value[candidate[i]] = variables[i]  
    expression = ''
    for key,value in letters_value.items():
        if key >= 0:
            expression += f'+{value}'
        else:
            expression += f'-{value}'
    # if there is a - at the beginning just leave it, otherwise remove it
    if expression[0]=='-':
        return expression
    else:
        return expression[1:]

```


## Results

```py

Failed 16 cases, not really sure about what am I missing

```

## Interesting Kata solution:
> by *[ReArBr](https://www.codewars.com/kata/reviews/65f8713d2a5c600001d40e8a/groups/66d781909547a239de245c28)*

```py

import numpy as np
from itertools import product
from operator import pos, neg

def plus_or_minus(variables, test):
    vars = list(variables)
    c = 0
    ints = []
    
    for ii in vars:
        c += 1
        ints.append(10**(c-1))
        
    tval = test(ints)
    
    
    #print(np.sum(np.dot(ints,coefs)))
    #print(tval)
    
    #for ii in range(2**len(ints)):
     #   coefs = np.ones(len(ints), dtype=int)
      #  for v in range(len(coefs)):
    
    
    # % 10**c
    coefs = np.ones(len(ints), dtype=int)
    
    for i in range(len(ints)):
        c = len(ints)-i-1
        #print('int',ints[c],'tval',tval)
        cc = tval+ints[c]
        #print('mod',(tval+ints[c]) // ints[c],'\n')
        if cc // ints[c] == 0 or cc // ints[c] == -1:
            coefs[c] = -1
            tval += ints[c]
        elif cc // ints[c] == 1 or cc // ints[c] == 2:
            tval -= ints[c]
            
    print(coefs)
    
    varvar = ''
    for ii in range(len(coefs)):
        if ii == 0 and coefs[ii] == 1:
            varvar += vars[ii]
        elif coefs[ii] == -1:
            varvar += "-"
            varvar += vars[ii]
        elif coefs[ii] == 1:
            varvar += "+"
            varvar += vars[ii]
            
    print(varvar)
        
    return varvar

```

## Notes about the interesting one:

This solution is a perfect example of almost all of the solutions available. They needed external libraries to accomplish the task. In this case, the person used `numpy` to better handle the array, they also used `itertools` like me. It was a very difficult question to solve without help from external modules.

---