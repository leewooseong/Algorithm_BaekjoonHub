traffic_light_count, load_arr_len = list(map(int, input().split()))
truck_position = 0
time_count = 0

while(traffic_light_count > 0):
  location, r_time, g_time  = list(map(int, input().split()))
  
  # 트럭이 신호등 있는 곳으로 이동 
  time_count += location - truck_position
  truck_position = location

  # 빨간불일 경우
  # - 불이 바뀔 때까지 기다림 -> 기다리는 시간을 time_count에 추가
  if 0 <= time_count % (r_time + g_time) < r_time:
    wait_time = r_time - time_count % (r_time + g_time)
    time_count += wait_time
  # 초록불일 경우
  # - 암것도 안함
  else:
    pass
  
  traffic_light_count -= 1

left_distance = load_arr_len - truck_position
time_count += left_distance

print(time_count)