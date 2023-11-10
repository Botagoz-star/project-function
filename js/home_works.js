// HOME WORK 1. EMAIL CHECKER

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

const parentBlock=document.querySelector("#parent_block");
// const childBlock=document.querySelector("#child_block");
// const newParent=document.querySelector("#newParent");



// Получаем маленький блок
const childBlock=document.getElementById("#movingBlock");

// Функция для движения маленького блока вправо
function moveRight(position) {
    if (position < 300) { // Здесь 300 - это максимальная позиция справа, вы можете изменить её на своё усмотрение
        position += 1; // Изменение позиции блока
        movingBlock.style.left = position + "px"; // Установка новой позиции
        setTimeout(function() {
            moveRight(position); // Рекурсивный вызов функции для продолжения движения
        }, 10); // Интервал времени (10 миллисекунд) между шагами движения
    }
}

// Начнем движение
moveRight(0);
