// ДЗ

// 1. Напишите функцию multiplyByTwo, которая принимает число в качестве аргумента и возвращает его умноженное на 2.
// const multiplyByTwo = n => {
//   let result = n;

//   result*=2

//   return result;
// }

// console.log(multiplyByTwo(3));

// 2. Создайте функцию primeNumbers, которая принимает число n и возвращает массив всех чисел от 2 до n.

// const primeNumbers = n => {
//   const numbers = [];
//   for(let i = -20; i <= n; i++){
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(primeNumbers(13));

// 3. Дан массив со строками. Напишите функцию, которая возвращает новый массив со строками, начинающимися на букву h
// => ['hola', 'hallo', 'hello']

// const greetings = ['hola', 'hallo', 'hello', 'good morning', 'good afternoon'];

// const getNewGreetings = () => {
//   const result = [];

//   for(let i = 0; i < greetings.length; i++){
//     if(greetings[i][0] === 'h'){
//       result.push(greetings[i])
//     }
//   }

//   return result;
// }

// console.log(getNewGreetings());

// *4. Создайте функцию uniquePush, которая принимает массив и элемент, и добавляет этот элемент в массив только в том случае, если его там ещё нет.

// const uniquePush = (arr, element) => {
//   if(!arr.includes(element)) {
//     arr.push(element)
//   }
// }

// const numbers = [1, 2, 6, 7, 10, 18];

// uniquePush(numbers, 18);
// uniquePush(numbers, 120);
// console.log(numbers);


// *5. Напишите функцию isPalindrome, которая принимает строку и возвращает true, если строка является палиндромом (читается одинаково в обоих направлениях), и false в противном случае. Пример палиндрома: "radar".

//______________________________________________________________Variant 1
// const isPalindrome = (str) => {
//     return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome('radar'));
// console.log(isPalindrome('nagan'));
// console.log(isPalindrome('kazak'));