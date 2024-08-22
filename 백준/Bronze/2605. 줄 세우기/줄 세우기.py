# 입력 받아오기
people_num = int(input())
number_ticket_list_reverse = list(map(int, input().split()))
number_ticket_list_reverse.reverse()
# print(number_ticket_list_reverse)

# 결과를 담을 배열
line_up_list = [0] * people_num

# 마지막에 뽑은 사람부터 확인하기 위해 reverse 적용
# - 

left_people = people_num
for last_number_ticket in number_ticket_list_reverse:

  current_location = len(line_up_list) - 1
  while last_number_ticket >= 0:
    if  last_number_ticket == 0 and line_up_list[current_location] == 0:
        line_up_list[current_location] = left_people
        left_people -= 1
        break

    if line_up_list[current_location] == 0:
      last_number_ticket -= 1
      
    current_location -= 1  

print(*line_up_list)