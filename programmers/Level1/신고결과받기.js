function solution(id_list, report, k) {
  var answer = [];
  let result = [];
  let reportDict = {};

  let set = new Set(report);
  let reportArr = [...set];

  reportArr = reportArr.join(" ").split(" ");

  //     k번 이상 신고 처리된 유저 찾기
  for (let i = 0; i < id_list.length; i++) {
    reportDict[id_list[i]] = 0;
  }
  let i = 1;
  while (1) {
    if (i > reportArr.length) {
      break;
    }

    reportDict[reportArr[i]] += 1;
    if (reportDict[reportArr[i]] >= k) {
      result.push(reportArr[i]);
    }
    i += 2;
  }

  let userCheck = {};
  //     userCheck 초기화
  for (let i = 0; i < id_list.length; i++) {
    userCheck[id_list[i]] = 0;
  }

  for (let i = 0; i < reportArr.length; i++) {
    if (result.includes(reportArr[i * 2 + 1])) {
      userCheck[reportArr[i * 2]] += 1;
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    answer.push(userCheck[id_list[i]]);
  }

  return answer;
}

let id_list = ["ryan", "con"];
let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 2;

console.log(solution(id_list, report, k));
