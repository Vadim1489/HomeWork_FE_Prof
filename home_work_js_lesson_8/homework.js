const users = [
    {   
        id: 1,
        personal_info: {
            firstname: 'Alice',
            age: 30,
            country: 'USA'
        }
    },
    {   
        id: 2,
        personal_info: {
            firstname: 'Bob',
            age: 25,
            country: 'Canada'
        }
    },
    {   
        id: 3,
        personal_info: {
            firstname: 'Charlie',
            age: 15,
            country: 'UK'
        }
    },
    {   
        id: 4,
        personal_info: {
            firstname: 'Diana',
            age: 28,
            country: 'Australia'
        }
    },
    {   
        id: 5,
        personal_info: {
            firstname: 'Eve',
            age: 17,
            country: 'New Zealand'
        }
    }
];


//____________________________________________________________________________________________________________________________________________________________________________

// Деструктуризация объекта
// const user = {
//     id: 4,
//     personal_info: {
//         firstname: 'Diana',
//         age: 28,
//         country: 'Australia'
//     }
// };

// const destrUser = ({ personal_info }) => {
//     const { firstname, age, country } = personal_info;
//     return `Имя ${firstname}, возраст ${ age}, страна ${country}`
// };

// console.log(destrUser(user));
//____________________________________________________________________________________________________________________________________________________________________________




// ДЗ
// 1. Напишите функцию, которая принимает массив объектов с полями name и age, и возвращает массив строк в формате "Name: [name], Age: [age]".
const showNameAge = (arr) => arr.map(el => `Name: ${el.personal_info.firstname}, Age: ${el.personal_info.age}`);
console.log(showNameAge(users));


// Деструктуризация массива объектов
const showNameAgeDestrucrion = (arr) => {
    const { personal_info } = arr;
    const {firstname, age} = personal_info;
    return `Name: ${firstname}, Age: ${age}`
}


users.forEach( arr => console.table(showNameAgeDestrucrion(arr)));

// 2. Напишите функцию, которая принимает массив объектов с полем age и возвращает новый массив, содержащий только те объекты, у которых age больше 18.
const showAge = (arr) => arr.filter(el => el.personal_info.age > '18').map(el => el.personal_info.age);
console.log(showAge(users));

// Деструктуризация массива объектов

const showAgeDestrucrion = (arr) => {
    const { personal_info } = arr;
    const { age, firstname } = personal_info; 
    return `Пользователю ${firstname} ${age} лет `
}

users.filter(arr => arr.personal_info.age > '18').map(arr => console.log(showAgeDestrucrion(arr)));

// 3. Напишите функцию, которая принимает массив объектов с полем age и возвращает массив, отсортированный по возрасту в порядке возрастания.
const showSortObjectAge = (arr) => arr.filter(el => el.personal_info.age).map(el => el.personal_info.age).sort((a, b) => a - b);
console.log(showSortObjectAge(users));

// Деструктуризация массива объектов

const showSortObjectAgeDestruction = (arr) => {
    const { personal_info } = arr;
    const { age} = personal_info;
    return `Массив объектов отсортирован по возрасту от меньшего к большему ${age}`
}

[...users].sort((a, b) => a.personal_info.age - b.personal_info.age).map(arr => console.log(showSortObjectAgeDestruction(arr)));

// 4. Напишите функцию, которая принимает массив объектов с полями age и country, и возвращает новый массив, содержащий только те объекты, у которых age больше 18 и country равно "USA".
const showCountryAge = arr => arr.filter(el => el.personal_info.age > '18' && el.personal_info.country === 'USA');
console.log(showCountryAge(users));

// Деструктуризация массива объектов

const showCountryAgeDestrucrion = arr => {
    const { personal_info } = arr;
    const { age, country, firstname} = personal_info;
    return  `${firstname} ${age} ${country}`
}

users.filter(el => el.personal_info.age > '18' && el.personal_info.country === 'USA').map(el => console.log(showCountryAgeDestrucrion(el)));

// * 5. Напишите функцию, которая принимает массив объектов с полем name и добавляет каждому объекту новое свойство greeting, содержащее строку "Hello, [name]!".

const addGreeting = arr => arr.map(el => el.personal_info.greeting = `Hello ${el.personal_info.firstname}!`);
console.log(addGreeting(users));

