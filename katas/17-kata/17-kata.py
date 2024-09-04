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


def test(args):
    if isinstance(args, list):
        return sum(args)

print(test([1,2,3,4,-1]))
print(plus_or_minus("abcde",test([1,-2,3,4,-1])))