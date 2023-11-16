// HOME WORK 1. EMAIL CHECKER
// 1)  Доработать прошлое ДЗ! Нужно чтобы малый квадрат теперь двигался по всему родительскому 
// квадрату. Дорабатываете код внутри проекта.

// 2) Отобразить на странице цифру 0 , создать 2 кнопки: stop и start
// Если нажать на start то цифра начнет увеличиваться на единицу до того момента пока вы 
// не нажмете на кнопку stop
// Используйте методы которые мы прошли на уроке. При нажатии на start повторно она должна
//  продолжить тот счет на котором остановился. Добавить на кнопку reset обнуление счетчика.
//   Обработать все возможные баги при работе счетчика (вёрстка в проекте уже есть) 
// Код писать внутри проекта (home_works.js)
const gmailInput=document.querySelector("#gmail_input");
const buttonGmail=document.querySelector("#gmail_button");
const gmailSpan=document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9]+@gmail\.com$/;


buttonGmail.addEventListener('click', () => {
    if(regExp.test(gmailInput.value)){

        gmailSpan.innerHTML='OK';
        gmailSpan.style.color="green"
    }else {
        gmailSpan.innerHTML='!=OK';
        gmailSpan.style.color="red"
    }
})
// HOME WORK 2. 

// const parentBlock=document.querySelector("#parent_block");
// // const childBlock=document.querySelector("#child_block");
// // const newParent=document.querySelector("#newParent");
// // Получаем маленький блок
// const childBlock=document.getElementById("#movingBlock");

// // Функция для движения маленького блока вправо
// function moveRight(position) {
//     if (position < 300) { // Здесь 300 - это максимальная позиция справа, вы можете изменить её на своё усмотрение
//         position += 1; // Изменение позиции блока
//         movingBlock.style.left = position + "px"; // Установка новой позиции
//         setTimeout(function() {
//             moveRight(position); // Рекурсивный вызов функции для продолжения движения
//         }, 10); // Интервал времени (10 миллисекунд) между шагами движения
//     }
// }
// // Начнем движение
// moveRight(0);
const childBlock=document.querySelector('.child_block')
let positionX=0;
let positionY=0;

const moveChildBlock=() => {
    if(positionX<448 && positionY===0){
        // +1 move right
            positionX++  
            childBlock.style.left=`${positionX}px`
            setTimeout(moveChildBlock,10)
        }else if(positionX>=448 && positionY<448){
            // move down
            positionY++
            childBlock.style.top=`${positionY}px`
            setTimeout(moveChildBlock,10)
        }else if(positionX>0 && positionY>=448){
            // move left
            positionX--;
            childBlock.style.left=`${positionX}px`
            setTimeout(moveChildBlock,10)
            // move up
        }else if (positionX===0 && positionY>0){
            positionY--;
            childBlock.style.top=`${positionY}px`;
            setTimeout(moveChildBlock,10);
        }
    }
moveChildBlock()
// 1)  Доработать прошлое ДЗ! Нужно чтобы малый квадрат теперь двигался 
// по всему родительскому квадрату. Дорабатываете код внутри проекта.
// 2) Отобразить на странице цифру 0 , создать 2 кнопки: stop и start
// Если нажать на start то цифра начнет увеличиваться на единицу до того момента 
// пока вы не нажмете на кнопку stop
// Используйте методы которые мы прошли на уроке. При нажатии на start повторно 
// она должна продолжить тот счет на котором остановился. Добавить на кнопку reset
//  обнуление счетчика. Обработать все возможные баги при работе счетчика (вёрстка 
//     в проекте уже есть) Код писать внутри проекта (home_works.js)
const startBtn=document.querySelector('#start')
const stopBtn=document.querySelector('#stop')
const resetBtn=document.querySelector('#reset')
const intervalNumber=document.querySelector('.interval')
let counter =0;
let intervalId;
startBtn.addEventListener('click',()=>{
    console.log(start)
    intervalId=setInterval(()=>{
        counter++;
        intervalNumber.textContent=counter;
    },1000);
} );
stopBtn.addEventListener('click',()=>{
    console.log("stop")
    clearInterval(intervalId);
} )
resetBtn.addEventListener('click',()=>{
    console.log(reset);
    counter=0;
    intervalNumber.textContent=counter;
    clearInterval(intervalId);
} )