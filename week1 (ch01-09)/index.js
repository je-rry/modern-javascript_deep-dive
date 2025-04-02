// myapp/index.js
const arr = [1,2,3];

arr.forEach(alert);


// 불필요한 변수가 있는 소스코드
function add(a,b) {
    let answer = a + b; //바로 리턴이 가능한데 왜 굳이 불필요하게 만드냐는 것
    return a + b;
}

// var의 문제점
var a = 1;
var a = 2;  //다른 언어라면 에러 발생

// 에러 없음 a의 값은 2