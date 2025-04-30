var Counter = (function() {
    var num = 0;
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

console.log(Counter.num);
console.log(Counter.increase);
console.log(Counter.increase);
console.log(Counter.decrease);
console.log(Counter.decrease);

// 클로저 : 함수가 선언될 때 렉시컬 환경을 기억
// increase와 decrease는 생성될 당시에 스코프에 있던 num 변수에 대한 참조를 유지. IIFE가 종료되어도 num 변수는 GC되지 않고 메모리에 존재
