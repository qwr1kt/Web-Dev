def count_evens(nums):
    count = 0
    for n in nums:
        if n % 2 == 0:
            count += 1
    return count

def sum13(nums):
    total = 0
    skip = False
    for n in nums:
        if skip:
            skip = False
            continue
        if n == 13:
            skip = True
            continue
        total += n
    return total

def big_diff(nums):
    return max(nums) - min(nums)

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False