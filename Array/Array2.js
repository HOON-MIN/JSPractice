const queries = [
  [1, 3],
  [1, 2],
  [3, 6],
  [3, -1],
  [4, 5],
  [2, -1],
  [3, -1],
  [2, -1],
];

const answer = [];

const arr5 = Array.from(Array(4), () => Array(1).fill(queries[0][1]));

for (let i = 1; i < queries.length; i++) {
  let num = queries[i][0];
  let res = queries[i][1];
  console.log(num);
  console.log(res);
  if (queries[i][1] == -1) {
    const popnum = arr5[num - 1].pop(res);
    console.log("arr5", arr5[num].length);
    console.log("비교", arr5[num].length == 1);
    if (arr5[num - 1] == 0) {
      switch (num) {
        case 1:
          for (let j = 0; j < arr5.length; j++) {
            if (arr5[num].length != 1) {
              const fillnum = arr5[num][1];
              arr5[j][0] = fillnum;
            } else {
              num = num + 1;
            }
          }
          break;
        case 2:
          for (let j = 0; j < arr5.length; j++) {
            if (arr5[num].length != 1) {
              const fillnum = arr5[num][1];
              for (let i = 0; i < arr5.length; i++) {
                arr5[i][0] = fillnum;
              }
            } else {
              if (num != 3) {
                num = num + 1;
              } else {
                num = 0;
              }
            }
          }
          arr5[num].pop();
          break;
        case 3:
          for (let j = 0; j < arr5.length; j++) {
            if (arr5[num].length != 1) {
              const fillnum = arr5[num][1];
              for (let i = 0; i < arr5.length; i++) {
                arr5[i][0] = fillnum;
              }
            } else {
              if (num != 3) {
                num = num + 1;
              } else {
                num = 0;
              }
            }
          }
          arr5[num].pop();
          break;
        case 4:
          for (let j = 0; j < arr5.length; j++) {
            if (arr5[num].length != 1) {
              const fillnum = arr5[num][1];
              for (let i = 0; i < arr5.length; i++) {
                arr5[i][0] = fillnum;
              }
            } else {
              if (num != 3) {
                num = num + 1;
              } else {
                num = 0;
              }
            }
          }
          arr5[num].pop();
          break;
      }
    }
    answer.push(popnum);
  } else {
    arr5[num - 1].push(res);
  }
}

for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i]);
}
console.log("answer", answer);
