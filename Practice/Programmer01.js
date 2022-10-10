//몫 구하기
const num1 = 2;
const num2 = 7;
function solution(num1, num2) {
  console.log(num1);
  console.log(num2);
  return parseInt(num2 / num1);
}

console.log(solution(num1, num2));

//출생연도 구하기
//1983 = 40
var age = 40;
var year = parseInt(new Date().getFullYear());
console.log(year - age + 1);

//불린 연습
function solution(num1, num2) {
  if (num1 == num2) {
    return 1;
  } else {
    return -1;
  }
}
