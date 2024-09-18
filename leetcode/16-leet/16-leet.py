class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        joined_arr = [*nums1,*nums2]
        joined_arr.sort()
        if len(joined_arr) == 1:
            return joined_arr[0]
        if len(joined_arr)%2==0:
            return (joined_arr[(len(joined_arr)+1)//2-1] + joined_arr[((len(joined_arr)+1)//2)])/2
        else :
            return joined_arr[(len(joined_arr))//2]        
