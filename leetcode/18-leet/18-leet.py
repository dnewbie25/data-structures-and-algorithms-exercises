class Solution:
    def scoreOfString(self, s: str) -> int:
        arr = list(s)
        sum = 0
        for i in range(len(arr)-1):
            sum += abs(ord(arr[i])-ord(arr[i+1]))
        return sum