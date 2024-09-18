class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        print(string)
        arr = list(string)
        arr.reverse()
        return ''.join(arr)==string
