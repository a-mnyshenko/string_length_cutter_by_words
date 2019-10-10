var string = document.querySelector('.t').innerText;

function solution(string, number) {
  if (string.length < number) {
    return -1;
  }
  var reg = new RegExp(`(?=[^ ]).{1,${number}}(?![^ \.])`, 'g');
  return string.match(reg);
}

(function test(number) {
  var arr = solution(string, number);
  var i = 0;
  arr.forEach((element) => {
    if (element > number) {
      console.error('error');
    }
    console.log(element);
  });
})(1000);
