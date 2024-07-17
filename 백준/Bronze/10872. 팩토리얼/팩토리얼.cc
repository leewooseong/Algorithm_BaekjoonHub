#include <cstdio>

using namespace std;


int sum = 1;
void factorial (int N)
{
	if (N > 0)
	{
		sum *= N;
		N--;
		factorial(N);
	}
}

int main()
{
	int N;
	scanf("%d", &N);
	factorial(N);
	printf("%d", sum);
	return 0;
}