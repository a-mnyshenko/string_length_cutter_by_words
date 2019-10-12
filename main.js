var S = document.querySelector('.text').innerHTML.trim(); //  .innerHTML will give bad formated text for us, i use it for test
function solution(str, k) {
let messages = [];
    let lastSpace, substr1;

    if (str.length > 500 || k > 500 || k < 0) return 'error';

    

    if(str.length < k){
     messages.push(str.substring(0,k));  
     return messages;      
    }

    if(str[k] === ' '){
        lastSpace = k;
      
    }else{
        substr1 = str.substring(0, k);
        lastSpace = substr1.lastIndexOf(' ');
        if(lastSpace === -1) return `error`;
    }
        messages.push(str.substring(0,lastSpace));
        str = str.substr(lastSpace + 1);

    return messages.concat(solution(str,k));

}


let K = 12;

solution(S, K).indexOf('error') !== -1 ? console.log(-1) : console.log(solution(S, K).length); 
