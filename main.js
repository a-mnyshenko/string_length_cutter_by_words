var S = document.querySelector('.text').innerHTML; //  .innerHTML will give to us bad formated text, i use it for test

const solution = (S, K) => {
  if (S.length < K) {
    return -1;
  }
  var reg = new RegExp(`(?=[^ ]).{1,${K}}(?![^ \.])`, 'g');
  var arr = S.replace(/[\t\v\n\s]+/g, ' ')
    .trim()
    .match(reg);
  return { arrParts: arr.length, arr: arr };
};
console.log(solution(S, 100));
