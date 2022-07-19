function solution(lottos, win_nums) {
  var answer = [];
  let correct = 0;
  let zero = 0;
  let rank = [6, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      correct++;
    }
    if (lottos[i] == 0) {
      zero++;
    }
  }
  answer[0] = rank[zero + correct];
  answer[1] = rank[correct];

  return answer;
}
