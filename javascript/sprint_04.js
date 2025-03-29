"use strict";
function f01() {
    return 4;
}
function f02() {
    return 44;
}
function f03() {
    console.log(55);
}
f03();
function f04() {
    return Math.floor(Math.random() * 101);
}
document.querySelector('.b-4').addEventListener('click', function () {
    document.querySelector('.out-4').textContent = String(f04());
});
let s5 = 'abcdefg';
function f05() {
    let random = Math.floor(Math.random() * s5.length);
    return s5[random];
}
document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.out-5').textContent = f05();
});
let n61 = 33;
let n62 = 55;
let n63 = 42;
function f06() {
    return Math.max(n61, n62, n63);
}
document.querySelector('.b-6').addEventListener('click', function () {
    document.querySelector('.out-6').textContent = String(f06());
});
function f07() {
    let random = Math.floor(Math.random() * (170 - 150 + 1)) + 150;
    console.log(random);
}
document.querySelector('.b-7').addEventListener('click', f07);
function f08(a, b) {
    return a + b;
}
console.log(f08(5, 6));
function f09(a, b) {
    return a + b;
}
function f10(a, b, c, d) {
    return Math.min(a, b, c, d);
}
document.querySelector('.b-10').addEventListener('click', function () {
    document.querySelector('.out-10').textContent = String(f10(33, 22, 34, 17));
});
function f11(a, b) {
    return Math.floor(Math.random() * (a - b + 1)) + b;
}
document.querySelector('.b-11').addEventListener('click', function () {
    document.querySelector('.out-11').textContent = String(f11(1000, 1100));
});
function f12(pass) {
    if (pass.length <= 8)
        return false;
    return [...pass].some(item => item >= 'A' && item <= 'Z');
}
document.querySelector('.b-12').addEventListener('click', function () {
    document.querySelector('.out-12').textContent = String(f12('dreXnonBloom'));
});
function f13(pass) {
    return (pass.length > 8) ? pass : false;
}
document.querySelector('.b-13').addEventListener('click', function () {
    document.querySelector('.out-13').textContent = String(f13('Birdperson'));
});
function f14(a, b) {
    if (b === 0)
        return false;
    else
        return a / b;
}
document.querySelector('.b-14').addEventListener('click', function () {
    document.querySelector('.out-14').textContent = String(f14(15, 0));
});
function f15(pass) {
    if (f13(pass)) {
        return 'password accepted';
    }
    return 'use the correct password';
}
document.querySelector('.b-15').addEventListener('click', function () {
    document.querySelector('.out-15').textContent = f15('RickSanhchez');
});
function f16(a) {
    let num = parseFloat(a);
    return isNaN(num) ? false : num;
}
document.querySelector('.b-16').addEventListener('click', function () {
    document.querySelector('.out-16').textContent = String(f16('200d'));
});
function f17(s) {
    return '';
}
document.querySelector('.b-17').addEventListener('click', function () {
    document.querySelector('.out-17').textContent = String(f17('.p-17'));
});
function f18(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
document.querySelector('.b-18').addEventListener('click', function () {
    console.log(f18(2, 3));
    console.log(f18(2, 3, 4));
});
function f19(s1, s2) {
    if (!s1 && !s2)
        return '';
    if (!s1)
        return s2;
    if (!s2)
        return s1;
    return s1.length >= s2.length ? s1 : s2;
}
document.querySelector('.b-19').addEventListener('click', function () {
    console.log(f19('Hi', 'hello'));
});
function f20(n1, n2) {
    if (!n1 && !n2)
        return Math.floor(Math.random() * 101);
    else
        return Math.floor(Math.random() * (n1 + 1 - n2)) + n2;
}
document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = String(f20(200, 220));
});
//# sourceMappingURL=sprint_04.js.map