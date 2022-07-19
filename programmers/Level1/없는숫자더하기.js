function solution(numbers) {
  let answer = 45;

  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}

let numbers = [1, 2, 3];
console.log(solution(numbers));
