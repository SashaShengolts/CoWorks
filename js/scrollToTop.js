//находми элемент
const scrollButton = document.querySelector('#scrollToTopBt')

window.addEventListener('scroll', function () {

    //если пользователь проскролили больше чем на высоту экрана тогда мы показываем кнопку
    if (window.pageYOffset > window.innerHeight) {
        scrollButton.classList.add('top-link--visible')
    } else {
        scrollButton.classList.remove('top-link--visible')
    }
   

})