// 머쓱이네 양꼬치 가게는 10인분을 먹으면
// 음료수 하나를 서비스로 줍니다.
// 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
// 정수 n과 k가 매개변수로 주어졌을 때,
// 양꼬치 n인분과 음료수 k개를 먹었다면
// 총얼마를 지불해야 하는지 return 하도록
// solution 함수를 완성해보세요.

const n = 29;
function solution(n, k) {
  const f = parseInt(n / 10);
  return 12000 * n + (k - f) * 2000;
}

//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
//array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

array = [1, 1, 2, 3, 4, 5];
n = 1;

function solution2(array, n) {
  count = 0;
  array.filter((value) => {
    console.log("value", value);
    value === n ? count++ : count;
    console.log(count);
  });
  return count;
}

//정수 배열 numbers가 매개변수로 주어집니다.
//numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution3(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const answer = sum / numbers.length;
  return answer;
}

//다른 문제풀이
//java foreach문 스타일
for (i of numbers) {
  answer += i;
}
//reduce함수
var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
return answer;
