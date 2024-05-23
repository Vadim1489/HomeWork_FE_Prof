// ДЗ
 const person = {
    name: 'Oleg',
    age: 27
 }
// 1. Обращение к свойству объекта: Создайте объект person с свойствами name и age, затем напишите код, который обращается к свойству name объекта person и выводит его значение.
console.log(person.name);
// 2. Проверка наличия свойства: Напишите функцию, которая принимает объект и имя свойства, и возвращает true, если это свойство существует в объекте, и false в противном случае.

const checkProperty = (obj, key) => obj.hasOwnProperty(key);

console.log(checkProperty (person, 'children'));
console.log(checkProperty (person, 'age'));
console.log(checkProperty (person, 'firstName'));
 
// 3. Изменение свойства объекта: Напишите код, который изменяет значение свойства age объекта person на новое значение.
console.log(person.age);

person.age = 30;

console.log(person.age);

// 4. Добавление нового свойства: Напишите код, который добавляет новое свойство gender со значением "male" к объекту person.

person.gender = 'male'

console.log(person.gender);
// 5. Удаление свойства: Напишите код, который удаляет свойство age из объекта person.

delete person.age

console.log(person.age);
// 6. Обращение к вложенным свойствам: Создайте объект car с вложенными свойствами engine и wheels, затем напишите код, который обращается к свойству engine объекта car и выводит его значение.

const car = {
    engine: {
        type: 'V8',
        horsepower: 450,
        fuel: 'diesel'
    },
    wheels: {
        count: 4,
        material: 'metall'
    }
}
console.log('Тип двигателя:', car.engine.type);
console.log('Мощьность в лошадиных силах:', car.engine.horsepower);
console.log('Топливо:', car.engine.fuel);