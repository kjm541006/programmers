function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      absolutes[i] = -absolutes[i];
    }
    answer += absolutes[i];
  }
  return answer;
}

absolutes = [1, 2, 3, 4];
sign = [true, true, false, true];
console.log(solution(absolutes, sign));
