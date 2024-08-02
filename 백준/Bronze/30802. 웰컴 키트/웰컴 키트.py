import sys

N = int(sys.stdin.readline())
sizes = list(map(int, sys.stdin.readline().split()))
T, P = map(int, sys.stdin.readline().split())

t_sum = sum([(size + T - 1) // T for size in sizes])
p_bundle, p_single = divmod(N, P)

print(t_sum)
print(p_bundle, p_single)