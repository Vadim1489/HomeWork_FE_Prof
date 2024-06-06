const usersInfo = [
    {
      "id": 1,
      "age": 39,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "age": 29,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "age": 19,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "age": 57,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
    "id": 5,
    "age": 33,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
    "id": 6,
    "age": 17,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
    ]
// ДЗ
// 1. Напишите функцию, которая принимает массив объектов и имя свойства, а затем возвращает объект, у которого значение этого свойства соответствует указанному.

const findByProp = (arr, propName, propValue) => arr.find(el => el[propName] === propValue);

// console.log(findByProp(usersInfo, 'id', 4));

// 2. Напишите функцию, которая принимает массив объектов и имя свойства, а затем возвращает массив объектов, отсортированных по возрастанию или убыванию значений этого свойства.

const sortArray = (arr, prop) => {
  if(typeof arr[0][prop] === 'number'){
    return arr.slice().sort((a, b) => a[prop] - b[prop])
  } else {
    return arr.slice().sort((a, b) => a[prop].localeCompare(b[prop]))
  }
}

console.log(sortArray(usersInfo, 'last_name'));