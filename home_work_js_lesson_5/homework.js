// ДЗ

// 1. Написать функцию, которая принимает массив со строками и возвращает новый массив, в который попадают все элементы из исходного массива с заглавной буквы
const first_letter_up = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

const fruits_vegitables = ['apple', 'orange', 'Tomato'];


console.log(fruits_vegitables);
console.log(first_letter_up(fruits_vegitables));