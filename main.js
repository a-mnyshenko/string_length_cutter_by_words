var S = document.querySelector('.text').innerHTML; //  .innerHTML will give bad formated text for us, i use it for test

const solution = (S, K) => {
  var reg = new RegExp(`(?=[^ ]).{1,${K}}(?![^ \.])`, 'g');

  return S.length < K
    ? -1
    : S.replace(/[\t\v\n\s]+/g, ' ')
        .trim()
        .match(reg);
};
console.log(solution(S, 500));
