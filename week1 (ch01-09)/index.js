// myapp/index.js
const arr = [1,2,3];

arr.forEach(alert);


// 불필요한 변수가 있는 소스코드
function add(a,b) {
    let answer = a + b; //바로 리턴이 가능한데 왜 굳이 불필요하게 만드냐는 것
    return a + b;
}