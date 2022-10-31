const angle = 93;

//JS조건문
function solution1(angle) {
  var answer = 0;
  if (angle > 0 && angle < 90) {
    answer = 1;
  } else if (angle == 90) {
    answer = 2;
  } else if (angle > 90 && angle < 180) {
    answer = 3;
  } else {
    answer = 4;
  }
  return answer;
}
//필터를 이용한 조건 반환
function solution2(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

//삼항연산자를 이용한 조건 반환
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
console.log(solution2(angle));

//n숫자보다 작은 짝수들을 전부 더한 값을 출력
function solution3(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      answer += i;
    } else {
      i;
    }
  }
  return answer;
}

function solution4(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

console.log("score", score);
score = 80;
var score;
score = 90;
console.log("score2", score);

console.log("맞아?", Math.floor(120 / 100));
