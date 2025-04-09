// myapp/index.js
const arr = [1,2,3];

arr.forEach(alert);


var first = 'Lee';
console.log(`My name is ${first}`);


// 불필요한 변수가 있는 소스코드
function add(a,b) {
    let answer = a + b; //바로 리턴이 가능한데 왜 굳이 불필요하게 만드냐는 것
    return a + b;
}

// var의 문제점
var a = 1;
var a = 2;  //다른 언어라면 에러 발생

// 에러 없음 a의 값은 2

var a = b = 1;
delete a;   // 안 지워짐
// delete b;    // 지워짐
console.log(b);


// 함수 선언
function add(x, y) {
    return x + y;
}

// 함수 참조
cons
