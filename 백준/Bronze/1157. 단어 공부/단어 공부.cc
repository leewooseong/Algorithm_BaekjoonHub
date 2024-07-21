#include<iostream>
#include<cstring>

using namespace std;

int main()
{
	char word[1000001];
	scanf("%s", word);
	
	int alphaarray[26] = {0,};
	
	int num = strlen(word);
	int i = 0;
	int max = 0;
	int same = 0;
	int arynum = 0;
	while (num--)
	{
		if (word[i] > 90)
		{
			alphaarray[word[i] - 97]++;
		}
		else
		{
			alphaarray[word[i] - 65]++;
		}
		i++;
	}
	for (int i = 0; i < 26; i++)
	{
		if (max < alphaarray[i])
		{
			max = alphaarray[i];
			arynum = i;
			same = 0;
		}
		else if (max == alphaarray[i])
		{
			same = 1;
		}
	}
	if (same == 1)
	{
		printf("?");
	}
	else
	{
		printf("%c",arynum + 65);
	}

	return 0;

}