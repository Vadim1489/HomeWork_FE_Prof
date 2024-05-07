// ДЗ на 29.04
// 1. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное число) и выводит в консоль все числа n до 0
//     const showNumbers = n => {
//         for(let i = 0; i >= n; i--){
//             console.log(i);
//         }
//     }
// showNumbers(-66)
// 2. Напишите функцию, принимающую 2 числа - n, m. Известно, что n всегда больше m. Функция выводит в консоль все числа от n до m
// const showNums = (n, m) => {
//     for(let i = n; i >= m; i--){
//         console.log(i);
//     }
// }
// showNums(9, -1);
// 3. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное или положительное число) и выводит в консоль все числа от 0 до n
// const showNegativeNumbers = (n) => {
//     for(let i = 0; i >= n; i--){
//         console.log(i);
//     }
// }
// showNegativeNumbers(-9);
// 4. Напишите функцию sumNumbers, которая принимает число n и возвращает сумму всех чисел от 1 до n.
// const sumNumbers = n => {
//     let sum = 0
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumNumbers(8));
// 5. Напишите функцию factorial, которая принимает число n и возвращает факториал этого числа (произведение всех целых чисел от 1 до n).
// const factorial = n => {
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(3));
// 6. Напишите функцию, принимающую 2 числа - n, m. Возможны 3 сценария:
//   - n > m
//   - m > n
//   - m === n 
// Функция выводит в консоль все нечетные числа от m до n

// const showNums = (n, m) => {
//     if (n > m ){
//         for(let i =m; i <= n; i++){
//              if ( i % 2 === 1) {
//                 console.log(i);
//             }
//         }
//     } else if (m > n){
//         for(let i = m; i >= n; i--){
//             if ( i % 2 === 1) {
//                 console.log(i);
//             }
//         }
//     } else {
//         console.log('Numbers is equal');
//     }
// }

// showNums(5,1);
// showNums(1,7);
// showNums(1,1);