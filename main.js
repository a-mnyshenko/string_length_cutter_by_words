var string = document.querySelector('.t').innerText;

const solution = (string, num) => {
  if (string.length < num) {
    return -1;
  }
  var reg = new RegExp(`(?=[^ ]).{1,${num}}(?![^ \.])`, 'g');
  var cuttedArr = string.match(reg);

  return {
    initStrLength: string.length,
    eachPart: num,
    arrTotalParts: cuttedArr.length,
    arr: cuttedArr,
  };
};

console.log(solution(string, 100));
