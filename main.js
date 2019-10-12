var S = document.querySelector('.text').innerHTML; //  .innerHTML will give bad formated text for us, i use it for test

const solution = (S, K) => {
  var reg = new RegExp(`(?=[^ ]).{1,${K}}(?![^ \.])`, 'g');

  const format = (str) =>
    str
      .replace(/[\t\v\n\s]+/g, ' ')
      .trim()
      .match(reg);

  return S.length < K
    ? -1
    : {
        arr: format(S),
        arrLength: format(S).length,
      };
};
console.log(solution(S, 500));
