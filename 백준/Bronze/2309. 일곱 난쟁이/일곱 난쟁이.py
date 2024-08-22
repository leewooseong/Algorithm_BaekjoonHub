short_man_height = [int(input()) for _ in range(9)]
short_man_height.sort()

max_height = 100
height_sum = sum(short_man_height)
remove_height = height_sum - max_height

i = 0
j = 1
while True:
    height = short_man_height[i] + short_man_height[j]
    if height == remove_height:
        short_man_height.remove(short_man_height[j])
        short_man_height.remove(short_man_height[i])
        break
    elif j == len(short_man_height)-1 and i < len(short_man_height)-2:
        i += 1
        j = i + 1
    else:
        j += 1

print(*short_man_height)