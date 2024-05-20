// ДЗ

// Легкий уровень:
// 1. Удвоение чисел: Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждое число удвоено.
const numbers = [2, 5, 6, 0, 9, 3, 10, 21];

const multNums = () => numbers.map(el => el * 2);

console.log(multNums());
// 2. Фильтрация четных чисел: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

const evenNums = () => numbers.filter(el => el % 2 === 0).map(el => el)

console.log(evenNums());
// 3. Поиск длины слов: Напишите функцию, которая принимает массив строк и возвращает массив с длинами каждой строки.
const getLength = arr => arr.map(el => el.length);

console.log(getLength([ 'one', 'sound', 'underground', 'apple', 'banana']));
// 4. Сортировка строк по алфавиту: Напишите функцию, которая принимает массив строк и возвращает новый массив с отсортированными строками в алфавитном порядке.

const getSortArr = arr => [...arr].sort((a, b) => a.localeCompare(b));

console.log(getSortArr([ 'one', 'sound', 'underground', 'apple', 'banana']));

// 5. Поиск первого числа больше 10: Напишите функцию, которая принимает массив чисел и возвращает первое число, которое больше 10.
const findFisrtMore10 = arr => arr.find(el => el > 10);

console.log(findFisrtMore10([2, 5, 6, 0, 9, 3, 10, 11, 21]));

// Средний уровень:
// 6. Фильтрация по длине слов: Напишите функцию, которая принимает массив строк и число N, возвращающую новый массив, содержащий только те строки, длина которых больше N.

const filterArr = (arr, N) => arr.filter(el => el.length > N);

console.log(filterArr(["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"], 5));
// 7. Сумма чисел в массиве: Напишите функцию, которая принимает массив чисел и возвращает их сумму.

const sumArr = arr => arr.reduce((acc, value) => acc + value, 0);

console.log(sumArr(numbers));
// 8. Поиск уникальных элементов: Напишите функцию, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.
// 9. Преобразование в квадраты чисел: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий квадраты каждого числа.

const sqrtArr = arr => arr.map(el => el ** 2); 

console.log(sqrtArr([2, 6, 0, 10]));
// 10. Поиск наибольшего элемента: Напишите функцию, которая принимает массив чисел и возвращает наибольшее число из массива.
const maxElem = arr => Math.max(...arr);

console.log(maxElem([2, 6, 100, 10]));
// Сложный уровень:
// 11. Фильтрация по диапазону: Напишите функцию, которая принимает массив чисел и два числа a и b, и возвращает новый массив, содержащий только те числа, которые находятся в диапазоне от a до b (включительно).
const filterByRange = (arr, a, b) => arr.filter(el => el >= a && el <= b);

console.log(filterByRange([2, 5, 6, 0, 9, 3, 10, 11, 21], 7 ,11));

// 12. Сортировка по длине слов: Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий строки, отсортированные по их длине.

const sortByLength = arr => arr.slice().sort((a, b) => a.length - b.length);

console.log(sortByLength(["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"]));

// 13. Среднее значение чисел в массиве: Напишите функцию, которая принимает массив чисел и возвращает их среднее значение.

const average = arr => {
    const sum = arr.reduce((acc, num) => acc + num , 0);
    return sum / arr.length;
}

console.log(average( numbers));
