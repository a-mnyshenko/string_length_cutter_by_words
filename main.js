var string = document.querySelector('.t').innerText;

const solution = (string, num) => {
  if (string.length < num) {
    return -1;
  }
  var reg = new RegExp(`(?=[^ ]).{1,${num}}(?![^ \.])`, 'g');
  var re = /(?=[^ ]).{1,50}(?![^ \.])/g;
  var cuttedArr = string.match(reg);
  cuttedArr.forEach((element) => {
    element.replace(/[\t\v\n]/gm, ' ');
  });
  return { arrTotalParts: cuttedArr.length, arr: cuttedArr };
};

console.log(solution(string, 500));
