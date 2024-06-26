// ДЗ
// 1. Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждое число увеличено в 100 раз
const numbers = [12, 57, 0, 13, 27, 89, 91, 15];
const multNumbers = () => {
    return numbers.map(number => number*100)
}
console.log(multNumbers());
// 2. Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка приведена к верхнему регистру.
const strings = ['apple', 'banana', 'cherry', 'date'];
const toUpperCase = () => {
    return strings.map(str => str.toUpperCase());
}
console.log(toUpperCase());
// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждое число возведено в квадрат.
const sqrt = () => numbers.map(number => number ** 2);
console.log(sqrt());
// 4. Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждое число заменено суммой его цифр. Например, из числа 123 получится число 6 (1 + 2 + 3).
const sumElem = () => {
    return numbers.map(num => String(num).split('').reduce((sum , digit) => sum + parseInt(digit),0));
}
console.log(sumElem());
// 5. Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий первые буквы каждого слова из исходного массива.
const firstLetter = () => {
    return strings.map(str => str[0]);
}
console.log(firstLetter());
// 6. Напишите функцию, которая принимает массив чисел и возвращает новый массив строк, в которых каждое число представлено в виде строки с добавленным к нему префиксом "Number: ".
const numberPrefix = () => {
    return numbers.map(num => `Number: ${num}`)
} 
console.log(numberPrefix());
// 7. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором каждая строка преобразована в формат Markdown (добавлены символы ** для выделения текста жирным).
const mark = () => {
    return strings.map(str => `**${str}**`);
}
console.log(mark()); 

 

