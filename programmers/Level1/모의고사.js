function solution(answers) {
  var answer = [];
  let temp = [];
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == student1[i % 5]) {
      s1++;
    }
    if (answers[i] == student2[i % 8]) {
      s2++;
    }
    if (answers[i] == student3[i % 10]) {
      s3++;
    }
  }

  temp.push(s1, s2, s3);
  let max = Math.max(...temp);

  for (let i = 0; i < 3; i++) {
    if (temp[i] == max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

answer = [1, 3, 2, 4, 2];
console.log(solution(answer));
