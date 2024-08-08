
T = int(input())

# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
  size, power = list(map(int, input().split(' ')))
  area = [list(map(int, input().split())) for _ in range(size)]

  dx_plus = [-1, 0, 1, 0]
  dy_plus = [0, -1, 0, 1]

  dx_cross = [-1, 1, -1, 1]
  dy_cross = [-1, -1, 1, 1]

  total_max = 0
  
  for i in range(0, (len(area) - 1) + 1):
    for j in range(0, (len(area) - 1) + 1):
      plus_sum = area[i][j]
      cross_sum = area[i][j]
      
      # 각 점별 범위 내 합 계산
      for k in range(0, 3 + 1):
        for distance in range(1, (power - 1) + 1):
          plus_di = i + dx_plus[k] * distance
          plus_dj = j + dy_plus[k] * distance

          cross_di = i + dx_cross[k] * distance
          cross_dj = j + dy_cross[k] * distance

          if (0 <= plus_di and plus_di < size) and (0 <= plus_dj and plus_dj < size):
            plus_sum += area[plus_di][plus_dj]
          if (0 <= cross_di and cross_di < size) and (0 <= cross_dj and cross_dj < size):
            cross_sum += area[cross_di][cross_dj]

      # 둘 중에 비교해서 큰 값 & 기존 값 보다 큰 값을 max 값으로 갱신
      if cross_sum < plus_sum and total_max < plus_sum:
        total_max = plus_sum

      elif plus_sum < cross_sum and total_max < cross_sum:
        total_max = cross_sum


  print(f'#{test_case} {total_max}')
