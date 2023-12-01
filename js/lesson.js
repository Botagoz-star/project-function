
// converter d/z #5
//CONVERTER
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element, target, target2, isCurrency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-Type", "application/json") // Исправлено здесь
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isCurrency === 'som') {
                target.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.eur).toFixed(2)
            } else if (isCurrency === 'usd') {
                target.value = (element.value * response.usd).toFixed(2)
                target2.value = (element.value * response.eur / response.usd).toFixed(2)
            } else if (isCurrency === 'eur') {
                target.value = (element.value * response.eur).toFixed(2)
                target2.value = (element.value * (response.usd / response.eur)).toFixed(2)
            }
            if (element.value === '' || target.value === '0') {
                target.value = '';
                target2.value = '';
            }
        }
    }
}

converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd, 'eur')


 
// Домашнее Задание: #4
// 1) Доработать код, который был написан на уроке. Создать функционал на кнопку prev 
// и next делать запрос при нажатии на эти функции
// соблюдайте принцип DRY. Важно чтобы карточка изначально не была пустой. 
// Если карточка 200 и нажать на next то она должна поменять на первую,
//  а если карточка под номером 1 и нажать на prev то карточка должна поменяться на 200 карточку. 

// 2) Так же сделать отдельный fetch запрос на эту ссылку:
//  'https://jsonplaceholder.typicode.com/posts' и отобразить данные просто в консоли

const cards = document.querySelector('.card');
const buttonNext = document.querySelector('#btn-next');
const buttonPrev = document.querySelector('#btn-prev');

const card = document.getElementById('.card')
let count = 1;

function loadCardData(cardNumber){
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
    .then(response => response.json())
    .then(data => { 
        cards.innerHTML = `
        <p>${data.title}</p>
        <p style = "color : ${data.completed ? 'green': 'red'}">${data.completed}</p>
        <span>${data.id}</span>
        `;




    })
}
loadCardData(count);
buttonNext.onclick =  () => {
    count++
    if(count > 200){
        count = 1
    }
    loadCardData(count)
    }
    
buttonPrev.onclick =  () => {
    count--
    if(count < 1){
        count = 200
    }
    loadCardData(count)
    }
    //d/z 6, 2 part

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Произошла ошибка при запросе к серверной части:', error);
    });



const object = {
    isOpen: false,
    name: "Modal",
    number: 42,
    id: 'ID123'
}

const {name, isOpen, number, id} = object

console.log(name)