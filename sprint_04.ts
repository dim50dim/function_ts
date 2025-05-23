// Task 01
// В TS можно применять простые функции. Но не интересно. Пример функции - аналога того что мы писали в JS. Запустите, посмотрите результат. Обратите внимание, функция будет продолжать работу при return '4', return false. Т.е. никакого контроля за типами данных нет. Снимите комментарий и убедитесь.

function f01() {
    return 4;
}

// console.log(f01());

// Task 02
// В TS логичнее применять контроль того, что возвращает функция. Т.е. указывать тип данных. Посмотрите на пример. Запустите. Теперь замените return 44 на return '44'. Код не компилируется и выдаст ошибку. Верните return 44. Контролировать тип данных, который возвращает функция - наиболее корректный подход в TS.


function f02(): number {
    return 44;
}

//  console.log(f02());

// Task 03
// Если функция в TS выступает как обертка для группировки действий и не предполагает возвращать значение, то просто напишите: void. Во многих языках программирования такие функции называют процедуры. Обратите внимание, если после этого вы решите дописать в процедуру return, то компилятор выдаст ошибку. Напишите return 55; и проверьте. После чего закомментируйте return 55.

function f03(): void {
    console.log(55);
    // return 55;
}

f03();

// Task 04
// Напишите функцию, которая возвращает случайное целое число от 0 до 100. Результат выведите в .out-4. Тип данных функции укажите соответствующий заданию.

function f04() : number {
   return Math.floor(Math.random() * 101);
}

document.querySelector('.b-4').addEventListener('click', function (): void {
    document.querySelector('.out-4').textContent = String(f04());
});

// Task 05
// Напишите функцию f05 тип string, которая возвращает случайный символ строки s5. Случайный символ выведите в .out-5.
// Во всех задачах далее, если функция возвращает какое-то значение - указывайте тип данных.
// Внимание здесь и далее в шаблоне функции может быть строка return ''. Данная строка нужна чтобы компилятор не ругался на функцию. Когда вы будете писать код функции удалите данную строку.

let s5: string = 'abcdefg';

function f05() : string {
    let random = Math.floor(Math.random() * s5.length);
    return s5[random];
  }

document.querySelector('.b-5').addEventListener('click', function (): void {
    document.querySelector('.out-5').textContent = f05();
});


// Task 06
// Напишите функцию f06, которая возвращает максимальное из трех чисел n61, n62, n63. Тип данных функции укажите явно. 

let n61: number = 33;
let n62: number = 55;
let n63: number = 42;

function f06() : number {
   return Math.max(n61,n62,n63);
}

document.querySelector('.b-6').addEventListener('click', function (): void {
    document.querySelector('.out-6').textContent = String(f06());
});

// Task 07
// Напишите процедуру f07, которая выводит случайное целое число от 150 до 170 в .out-7. Тип данных процедуры - укажите самостоятельно.

function f07() : void {
  let random = Math.floor(Math.random() * (170 - 150 + 1)) + 150;
  console.log(random);
  
  
}

document.querySelector('.b-7').addEventListener('click', f07);

// Task 08
// В TS аргументы функции могут иметь заданные типы данных. Это упрощает написание кода и снижает количество ошибок в коде. Изучите код. Попробуйте передать не (5, 6) а ('5', 6). Изучите ошибку компиляции и верните (5,6) аргументы. 

function f08(a: number, b: number): number {
    return a + b;
}

 console.log(f08(5, 6));

// Task 09
// В TS, в отличие от JS проводится контроль числа аргументов. Т.е. если в JS передать большее число аргументов чем положено, то ошибки не будет. А вот в TS так делать нельзя. Удалите комментарий со строки запуска и посмотрите как поведет себя компилятор. После - верните комментарий.

function f09(a: number, b: number): number {
    return a + b;
}

//  console.log(f09(5, 6, 7));


// Task 10
// Напишите функцию f10, которая принимает 4 числа и возвращает меньшее из них. Тип данных функции, аргументы и типы аргументов укажите самостоятельно.

function f10(a : number, b : number, c : number, d : number) : number {
   return Math.min(a,b,c,d);

}

document.querySelector('.b-10').addEventListener('click', function (): void {
    document.querySelector('.out-10').textContent = String(f10(33, 22, 34, 17));
});

// Task 11
// Напишите функцию, которая принимает два аргумента и возвращает целое случайное число от первого аргумента включительно до второго аргумента включительно. Тип функции и аргументов задайте самостоятельно.

function f11(a : number, b : number) : number {

   return  Math.floor(Math.random() * (a - b + 1)) + b; 
}

document.querySelector('.b-11').addEventListener('click', function (): void {
    document.querySelector('.out-11').textContent = String(f11(1000, 1100));
});


// Тask 12
// Напишите функцию проверку пароля. Функция принимает строку. Если пароль меньше или равен 8 символов, то функция возвращает false, если больше to возвращает true. Пароль должен содержать минимум один символ в верхнем регистре. Тип данных функции, аргументы и типы аргументов укажите самостоятельно. Задание решается без регулярных выражений!


function f12(pass : string) : boolean{

 if(pass.length <= 8) return false;
 return [...pass].some(item => item >= 'A' && item <= 'Z')
}

document.querySelector('.b-12').addEventListener('click', function (): void {
    document.querySelector('.out-12').textContent = String(f12('dreXnonBloom'));
});


// Task 13
// В некоторых случаях функции мало одного значения. Например, если у вас в функции нужно делать проверки. Давайте усложним предыдущую задачу - пользователь вводит пароль. Если длина пароля меньше или равна восемь символов, то функция возвращает false. Если больше - то сам пароль. Т.е. формально теперь функция может возвращать и string и boolean. Разберите пример.

function f13(pass: string): string | boolean {
    return (pass.length > 8) ? pass : false;
}

document.querySelector('.b-13').addEventListener('click', function (): void {
    document.querySelector('.out-13').textContent = String(f13('Birdperson'));
});


// Task 14
// Давайте напишем теперь классическую функцию. Функция возвращает результат деления первого числа на второе. Однако добавим проверку. Если второй аргумент равен нулю - то возвращается false. Типы функции и аргументов напишите самостоятельно.

function f14(a : number, b : number) : boolean | number {
   if(b === 0) return false;
   else return a / b; 
}

document.querySelector('.b-14').addEventListener('click', function (): void {
    document.querySelector('.out-14').textContent = String(f14(15, 0));
});

// Обратите внимание, как хорошо решается задача. Не нужны проверки, что в функцию передали что-то кроме чисел - не получится, код не скомпилируется. Не нужно проверять что возвращает функция - все указано.

// Task 15
// Теперь давайте раскроем потенциал такого подхода - посмотрим что могут дать функции с двумя типами данных. Вернемся к задаче пароля. Рассмотрите функцию и проанализируйте ее работу. Попробуйте передать пароль 'RickSanchez' и 'Rick'.

function f15(pass) {
    if (f13(pass)) {
        return 'password accepted';
    }
    return 'use the correct password'
}

document.querySelector('.b-15').addEventListener('click', function (): void {
    document.querySelector('.out-15').textContent = f15('RickSanhchez');
});

// Task 16
// Напишите функцию, которая может возвращать или boolean или число. Функция принимает строку, и если эту строку можно преобразовать к числу, то возвращает число, если нет - false.
// Например -4.4f можно привести к числу -4.4
// А вот f44 нельзя преобразовать к числу

function f16(a : string) : boolean | number {
let num = parseFloat(a);
return isNaN(num) ? false : num;
}

document.querySelector('.b-16').addEventListener('click', function (): void {
    document.querySelector('.out-16').textContent = String(f16('200d'));
});

// Task 17
// Напишите функцию, которая принимает имя класса как строку, и возвращает текст из элемента DOM с таким классом. Текст должен быть очищен от пробелов по краям строки. Если такого элемента нет - возвращает false. Типы функции и аргументов напишите самостоятельно.

function f17(s) {
    return ''; // удалите данную строку при написании решения
}

document.querySelector('.b-17').addEventListener('click', function (): void {
    document.querySelector('.out-17').textContent = String(f17('.p-17'));
});

// Task 18
// В функцию TS можно передавать необязательные параметры. Изучите как работает функция  f18. 

function f18(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

document.querySelector('.b-18').addEventListener('click', function (): void {
    console.log(f18(2, 3));
    console.log(f18(2, 3, 4));
});

// Task 19
// Напишите функцию, которая принимает 2 необязательных аргумента - строки и возвращает большую по длине строку. Если передан один аргумент - возвращает его. Если аргументы не переданы - возвращает пустую строку. Типы функции и аргументов напишите самостоятельно.

function f19(s1? : string, s2?: string) : string {
    if(!s1 && !s2) return '';
    if(!s1) return s2;
    if(!s2) return s1;
    return s1.length >= s2.length ? s1 : s2;
}

document.querySelector('.b-19').addEventListener('click', function (): void {
    console.log(f19('Hi','hello'));
});

// Task 20
// Напишите функцию, которая принимает два необязательных аргумента - числа. И если они заданы генерирует и возвращает случайное целое в указанном диапазоне, а если не указаны - возвращает случайное целое число от 0 до 100.

function f20(n1? : number, n2? : number) : number {
   if(!n1 && !n2) return Math.floor(Math.random() *  101);
   else return Math.floor(Math.random() * (n1 + 1 - n2)) + n2;
}

document.querySelector('.b-20').addEventListener('click', function (): void {
    document.querySelector('.out-20').textContent = String(f20(200,220));
});