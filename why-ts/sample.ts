function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20);
result.toLocaleString();// 빠르게 숫자관련 api를 완성해 나갈 수 있다 (vscode의 intellisense 때문이다)
add(10, '20');// 두번째 인자가 우리가 정해놓은 타입과 맞지 않기 때문에 미리 에러를 확인할 수 있다
