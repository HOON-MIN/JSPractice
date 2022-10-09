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

const arrlist = Array.from(Array(4), () => Array(1).fill(queries[0][1]));

for (let i = 1; i < queries.length; i++) {
  let num = queries[i][0];
  let res = queries[i][1];
  console.log(num);
  console.log(res);
  if (queries[i][1] == -1) {
    const popnum = arrlist[num - 1].pop(res);
    console.log("arrlist", arrlist[num].length);
    console.log("비교", arrlist[num].length == 1);
    if (arrlist[num - 1] == 0) {
      switch (num) {
        case 1:
          for (let j = 0; j < arrlist.length; j++) {
            if (arrlist[num].length != 1) {
              const fillnum = arrlist[num][1];
              arrlist[j][0] = fillnum;
            } else {
              num = num + 1;
            }
          }
          break;
        case 2:
          for (let j = 0; j < arrlist.length; j++) {
            if (arrlist[num].length != 1) {
              const fillnum = arrlist[num][1];
              for (let i = 0; i < arrlist.length; i++) {
                arrlist[i][0] = fillnum;
              }
            } else {
              if (num != 3) {
                num = num + 1;
              } else {
                num = 0;
              }
            }
          }
          arrlist[num].pop();
          break;
        case 3:
          for (let j = 0; j < arrlist.length; j++) {
            if (arrlist[num].length != 1) {
              const fillnum = arrlist[num][1];
              for (let i = 0; i < arrlist.length; i++) {
                arrlist[i][0] = fillnum;
              }
            } else {
              if (num != 3) {
                num = num + 1;
              } else {
                num = 0;
              }
            }
          }
          arrlist[num].pop();
          break;
        case 4:
          for (let j = 0; j < arrlist.length; j++) {
            if (arrlist[num].length != 1) {
              const fillnum = arrlist[num][1];
              for (let i = 0; i < arrlist.length; i++) {
                arrlist[i][0] = fillnum;
              }
            } else {
              if (num != 3) {
                num = num + 1;
              } else {
                num = 0;
              }
            }
          }
          arrlist[num].pop();
          break;
      }
    }
    answer.push(popnum);
  } else {
    arrlist[num - 1].push(res);
  }
}

for (let i = 0; i < arrlist.length; i++) {
  console.log(arrlist[i]);
}
console.log("answer", answer);
