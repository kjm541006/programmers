function solution(sizes) {
  var answer = 0;
  let wmax = 0;
  let hmax = 0;
  let temp = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
  }

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > wmax) {
      wmax = sizes[i][0];
    }
    if (sizes[i][1] > hmax) {
      hmax = sizes[i][1];
    }
  }

  answer = wmax * hmax;

  return answer;
}
