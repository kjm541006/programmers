function solution(a, b) {
  let answer = "";
  let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let date = new Date(`2016-${a}-${b}`);
  let day = date.getDay();

  answer = dayArr[day];

  return answer;
}

let a = 5;
let b = 24;

console.log(solution(a, b));
