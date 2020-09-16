
 const togglePopUp = () => {
    const popup = document.querySelector('.popup')
    const popupBtn = document.querySelectorAll('.popup-btn')
    const popupContent = document.querySelector('.popup-content')
    let count = 0

    //анимация модального окна
    let popupAnimate = () => {
        popup.style.left = '0%'
        popup.style.display = 'block';
        const popupClick = () => {
            let popupInterval = requestAnimationFrame(popupClick)
            count += 20
            if (count < (screen.width/2 - (popupContent.getBoundingClientRect().width/2) + 50)) {
                popupContent.style.left = count + 'px'
            } else cancelAnimationFrame(popupInterval)
        }
        popupClick()
    }

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            //___проверка и отключение анимации если экран меньше 768px
            if (screen.width < 768) {
                popup.style.display = 'block';
                popupContent.style.left = `${screen.width/2 - (popupContent.getBoundingClientRect().width/2) + 50}px`
            } else {
                popupAnimate()
            }

        })
    })

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none'
            count = 0
        } else {
            target = target.closest('.popup-content')
            if (!target) {
                popup.style.display = 'none'
                count = 0
            }
        }
    })
}

export default togglePopUp;
