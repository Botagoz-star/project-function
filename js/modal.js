// Домашнее Задание:  
// 1) Сделать слайдер автоматическим, чтобы срабатывала каждые 3 секунды  
// 2) Вызывать модальное окно по скролу до конца страницы один раз. 
// То есть если пользователь дошел до конца страницы то вызвать
//  модальное окно один раз если он закроет его и снова прокрутит 
//  до конца страницы то вызов не должен происходить.  Для выполнения 
//  этой задачи вам нужно изучить метод removeEventlistener()
// 3) Вызывать модальное окно через 10 секунд после открытия сайта
// 4) Добавить всё это в проект!
//  Tab Slider 
// const tabsContenCards=document.querySelectorAll('.tab_content_block')
// const tabsItems=document.querySelectorAll('.tab_content_item')
// const tabsItemsParent=document.querySelector('.tab_content_items')
// let currentTab=0

// const hideTabsContentCards=()=>{
//     tabsContenCards.forEach((tabsContenCard)=>{
//         tabsContenCard.style.display='none'
//     })
//     tabsItems.forEach((tabItem)=>{
//         tabItem.classList.remove('tab_content_item_active')
//     })
// }
//  const showTabsContentCards=(indexElement=0)=>{
//   tabsContenCards[indexElement].style,display='block'
//   tabsItems[indexElement].classList.add('tab_content_item_active')
// }
// const switchTab=()=>{
//     hideTabsContentCards()
//     currentTab=(currentTab+1)% tabsItems.length
//     showTabsContentCards(currentTab)
// }
// hideTabsContentCards()
// showTabsContentCards()
// setInterval(switchTab,3000)

// tabsItemsParent.onclick=(event)=>{
//     if(event.target.classList.contains('tab_content_item')){
//         tabsItems.forEach((tabItem, tabItemIndex)=>{
// if(event.target===tabItem){
//     hideTabsContentCards()
//     currentTab=tabItemIndex
//     showTabsContentCards(currentTab)
// }
//         })
//     }
// }
// MODAL
// const modal=document.querySelector('.modal')
// const modalTriggerBtn=document.querySelector('#btn-get')
// const modalCloseBtn=document.querySelector('.modal_close')
// const openModal=()=>{
//     modal.computedStyleMap.display='block'
//     document.body.style.overflow='hidden'
//     modalWasShown=true;
// }
// const closeModal=()=>{
//     modal.style.display='none'
//     document.body.style.overflow=''
// }
// modalTrigger.onclick=()=> {openModal()}
// modalCloseButton.onclick=()=>{closeModal()}
// modal.onclick = () => {
//     if(event.target === modal)
//         closeModal()
    
// }
// let modalWasShown = false;
// window.addEventListener('scroll', () => {
//     const scrollHeight = window.innerHeight + window.scrollY;
//     const pageHeight = document.documentElement.scrollHeight;
//     if (scrollHeight >= pageHeight * 1 && !modalWasShown){
//         openModal();
//     }
// })
// let showModal=false;
// const timeOut = () => {
//     if (!showModal ) {
//         setTimeout(openModal, 10000)
//         showModal=true
//     }
// }
// timeOut()

//TAB SLIDER
const tabContendBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')

const hideTabContend = () => {
    tabContendBlocks.forEach(tabContendBlock=> {
        tabContendBlock.style.display = 'none'
    })
    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')

    })
}
const showTabContends = (indexElement = 0) => {
    tabContendBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}
hideTabContend()
showTabContends()

tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsBlocks.forEach((tabBlock, tabIndex)=> {
            if (event.target === tabBlock){
                hideTabContend()
                showTabContends(tabIndex)
            }
        })
    }
}
let sliderIndex = 0
const autoSlider = () => {
    hideTabContend()
    sliderIndex = (sliderIndex + 1) % tabContendBlocks.length
    showTabContends(sliderIndex)
}
setInterval(autoSlider, 3000)


// //MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    modalWasShown = true

}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}
modalTrigger.onclick = () => { openModal() }

modalCloseButton.onclick = () => { closeModal() }

modal.onclick = () => {
    if (event.target === modal) closeModal()
}


let modalWasShown = false
window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Если пользователь прокрутил до определенной точки (здесь, 100% страницы)
    if (scrollHeight >= pageHeight * 1 && !modalWasShown) {   // ЗАПОМНИТЬ ЧТО НЕ РАВНО В УСЛОВИЯХ ОБОЗНАЧАЕТСЯ ТАК
        openModal()

    }

})

let showModal = false
//const time = 10
const timeOut = () => {
    if (!showModal) {
        setTimeout(openModal, 10000)
        showModal = true
    }
}
timeOut()