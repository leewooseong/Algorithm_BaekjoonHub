A, B, V = list(map(int, input().split()))

need_to_go = V - A
day_up = A - B

if need_to_go % day_up != 0:
  print(need_to_go // day_up + 2)
else:
  print(need_to_go // day_up + 1)
