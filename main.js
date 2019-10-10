var string = document.querySelector('.t').innerText;

function solution(string, num) {
  if (string.length < num) {
    return -1;
  }
  var reg = new RegExp(`(?=[^ ]).{1,${num}}(?![^ \.])`, 'g');
  var cuttedArr = string.match(reg);
  return {
    initial_str_length: string.length,
    message_each_part: num,
    arr_parts: cuttedArr.length,
    arr: cuttedArr,
  };
}

console.log(solution(string, 100));
