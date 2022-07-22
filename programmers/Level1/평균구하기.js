function solution(arr) {
  var answer = 0;

  let sum = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  answer = sum / arr.length;
  return answer;
}
