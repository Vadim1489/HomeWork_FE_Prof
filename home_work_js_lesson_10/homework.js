// ДЗ

// 1. Изменение цвета текста: Создайте кнопку, которая при клике меняет цвет текста абзаца на красный.
const paragraph = document.querySelector('.paragraph');
const button1 = document.querySelector('.change_color');


button1.addEventListener('click', () =>  paragraph.style.color = 'red')
// 2. Скрытие элемента: Создайте кнопку, которая при клике скрывает изображение (делает его невидимым).

const picture = document.querySelector('.picture');
const button2 = document.querySelector('.display_none');

button2.addEventListener('click', () => picture.style.display = 'none');
// 3. Изменение фона: Создайте кнопку, которая при клике меняет цвет фона всего документа на синий.
const background = document.querySelector('.color');
const button3 = document.querySelector('.change_background_color');

button3.addEventListener('click', () => background.style.backgroundColor = 'blue');
// 4. Увеличение шрифта: Создайте кнопку, которая при клике увеличивает размер шрифта у абзаца.
const button4 = document.querySelector('.fontSizeUp');
let fontSize = 16;
paragraph.style.fontSize = fontSize + 'px';

button4.addEventListener('click', () => {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + 'px';
});

// 5. Добавление рамки: Создайте кнопку, которая при клике добавляет красную рамку к изображению.
const button5 = document.querySelector('.border');

button5.addEventListener('click', () => picture.style.border = '2px solid red');
// 6. Переключение видимости: Создайте кнопку, которая при каждом клике чередует видимость элемента (показывает или скрывает его).
const button6 = document.querySelector('.display_none_block');

button6.addEventListener('click', () => picture.style.display = picture.style.display === 'block' ? 'none' : 'block');
// 7. Переключение цвета текста: Создайте кнопку, которая при клике переключает цвет текста абзаца между красным и черным.
const button7 = document.querySelector('.black_red');

button7.addEventListener('click', () => paragraph.style.color = paragraph.style.color === 'black' ? 'red' : 'black');
// 8. Изменение ширины элемента: Создайте кнопку, которая при клике увеличивает ширину изображения.
const button8 = document.querySelector('.change_width');
let width = 350;


button8.addEventListener('click', () => {
    width += 10;
    picture.style.width = width +'px';
});
// 9. Изменение высоты элемента: Создайте кнопку, которая при клике увеличивает высоту изображения.
const button9 = document.querySelector('.change_height')
let height = 350;

button9.addEventListener('click', () => {
    height += 10;
    picture.style.height = height + 'px';
});
// 10. Изменение стиля шрифта: Создайте кнопку, которая при клике меняет стиль шрифта текста на курсив.
const button10 = document.querySelector('.change_font_style');

button10.addEventListener('click', () => paragraph.style.fontStyle = paragraph.style.fontStyle === 'normal' ? 'italic' : 'normal');