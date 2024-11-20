const slider = tns({
    container: '.slider',
    items: 2.7,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    //loop: false,  
    
    autoWidht: true,
    lazyload: true,   
    swipeAngle: false,   
    

    controlsContainer: ".locations__controls",
    nav: false,
});

const prevMobile = document.querySelector('.locations__controls--mobiles .prev')
const nextMobile = document.querySelector('.locations__controls--mobiles .next')


prevMobile.onclick = function () {
    slider.goTo ('prev');
}

nextMobile.onclick = function () {
    slider.goTo('next');
}
