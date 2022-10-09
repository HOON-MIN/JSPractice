//자바스크립트는 진정한 2차원 배열은 없다.
//var arr = [][]; 같은 배열 선언은 불가능
//약간의 트릭을 통한 2차원 배열과 비슷한 배열을 생성가능.

//이중배열 선언
//초기값 지정
var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

var arr2 = new Array(4);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = new Array(2);
}
console.log(arr2);
console.log(arr2[0][0]);

function create2DArray(rows, columns) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(columns);
  }
  return arr;
}

var arr3 = create2DArray(4, 2);
console.log("arr3", arr3);

//ES6를 사용 가능한 방법
const arr4 = Array.from(Array(4), () => new Array(2));
console.log("arr4", arr4);

const arr5 = Array.from(Array(4), () => Array(2).fill(1));
//배열안에 배열 값 넣어보기
for (let i = 0; i < arr5.length; i++) {
  arr5[arr5[i][0]].push(3);
}
console.log("arr5", arr5);

//배열안에 배열 들어간 값
//for (let i = 0; i < arr5[1].length; i++) {
//  console.log(arr5[1][i]);
//}

//배열안에 쿼리 넣어보기
const queries = [
  [1, 3],
  [2, 4],
  [4, 1],
  [1, 8],
];

//바보였다 배열은 0번부터 시작인데 1을 하니 자꾸 안되서 맨붕이왔다...

for (let i = 0; i < queries.length; i++) {
  let num = queries[i][0];
  let res = queries[num - 1][1];
  console.log(num);
  arr3[num - 1].push(res);
}

for (let i = 0; i < arr3.length; i++) {
  console.log("arr3", arr3[i][0]);
}
