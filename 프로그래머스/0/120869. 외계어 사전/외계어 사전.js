// spell과 외계어 사전 dic이 매개변수로 주어진다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2
const PASS = 1;
const FAIL = 2;

// 주어진 스펠로 조합한 단어가 있다면
// - 중복 사용은 허용 x

// 1. spell로 나타낼 수 있는 조합찾아서 한개씩 있는지 비교하기
//    - spell로 나올 수 있는 알파벳 갯수 : n!
//    - 이걸 최대 10번 반복 해야함 : n! * 10

// 2. 배열에서 spell의 한문자씩 가지고 있는 녀석만 살려서 후보 추리기
//    - spell 최대 10번
//    - dic의 남아있는 수만큼 수행되어야한다: 최대 10번
//    -> 그럼 최대 100번 안으로 찾아낼 수 있다는 결론, 이 방법을 선택
function solution(spell, dic) {
  let answer = PASS;
  let surviveDic = dic;

  surviveDic = dic.filter((word) => {
    // 조건 1. 길이가 다르면 filter
    if (word.length !== spell.length) {
      return false;
    }

    for (let i = 0; i < spell.length; i++) {
      // 조건 2. spell을 포함하지 않는 단어는 필터링
      if (!word.includes(spell[i])) {
        return false;
      }
    }

    //조건 3.  spell을 2번 이상 포함하는 단어는 필터링
    const setOfWord = new Set(word);
    if (word.length !== setOfWord.size) {
      return false;
    }

    return true;
  });

  return surviveDic.length > 0 ? PASS : FAIL;
}