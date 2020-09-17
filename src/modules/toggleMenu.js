const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        body = document.querySelector('body')

    const handlerMenu = () => {
        menu.classList.toggle('active-menu')
    }

    //________Анимация меню_______
    let menuAnimate = (hash) => {
        let count = 0
        const menuClick = () => {
            let menuInterval = requestAnimationFrame(menuClick)
            let x = 15
            if (count < 825 &&  hash === '#service-block') {
                scrollTo(0, count += x * 1.5)
            } else if (count < 2031 &&  hash === '#portfolio') {
                scrollTo(0, count += x * 2.5)
            } else if (count < 3004.5 &&  hash === '#calc') {
                scrollTo(0, count += x * 3.5 )
            } else if (count < 4140 &&  hash === '#command') {
                scrollTo(0, count += x * 4.5)
            } else if (count < 5046 &&  hash === '#connect') {
                scrollTo(0, count += x * 5.5)
            } else cancelAnimationFrame(menuInterval)
        }
        menuClick()
    }
    // Общий обработчик событий для меню, close, скролла
    body.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('close-btn')) {
            handlerMenu()
        } else if (target.closest('.active-menu>ul>li>a')) {
            menuAnimate(event.target.hash)
            handlerMenu()
        } else if (target.closest('.menu')) {
            handlerMenu()
        } else if (target.closest('.scroll_btn')) {
            menuAnimate('#service-block')
        }
    })
}

export default toggleMenu;
