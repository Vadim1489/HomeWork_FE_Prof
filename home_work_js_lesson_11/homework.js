// ДЗ

// 1. Создайте кнопку. При клике на кнопку добавьте класс "active" к любому элементу на странице.
const paragraph = document.querySelector('.paragraph');
const addActiveBtn = document.querySelector('.btn_active_add');

addActiveBtn.addEventListener('click', () => paragraph.classList.add('active'));
// 2. Создайте кнопку. При клике на кнопку удалите класс "active" у любого элемента на странице.

const deleteActiveBtn = document.querySelector('.btn_active_del');

deleteActiveBtn.addEventListener('click', () => paragraph.classList.remove('active'));
// 3. Создайте кнопку и изображение. При клике на кнопку изменяйте атрибут src изображения.

const picture = document.querySelector('.picture');
const changeAttributeBtn = document.querySelector('.change_attribute');

    changeAttributeBtn.addEventListener('click', () => {
        picture.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoV9g4vyYFYslLV8qPWB1ihiVSEsMeVhmug&s';

        picture.alt = 'squirrel';
    });
// 4. Создайте кнопку. При клике на кнопку измените цвет текста любого элемента на странице.
const changeColorBtn = document.querySelector('.change_color_btn');

changeColorBtn.addEventListener('click', () => paragraph.classList.toggle('p_color'));

// *5. Добавьте класс "hovered" к элементу при наведении мыши и удалите его при убирании курсора.
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => btn.classList.add('hovered'));
btn.addEventListener('mouseout', () => btn.classList.remove('hovered'));

// *6. Создайте две кнопки. При клике на одну кнопку делайте другую кнопку активной/неактивной (enabled/disabled).

const btn1 = document.querySelector('.btn_1');
const btn2 = document.querySelector('.btn_2');

btn1.addEventListener('click', () => btn2.disabled = !btn2.disabled);

btn2.addEventListener('click', () => btn1.disabled = !btn1.disabled);
