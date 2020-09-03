window.addEventListener('DOMContentLoaded', () => {


    // Time

    const countTimer = (deadline) => {

        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const addZero = n => n < 10 ? '0' + n : n

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,

                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds }
        }

        const updateClock = () => {
            let timer = getTimeRemaining();
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining <= 0) {
                clearInterval(idInterval)
                timerHours.textContent = addZero(0);
                timerMinutes.textContent = addZero(0);
                timerSeconds.textContent = addZero(0);
            }

        }
        let idInterval = setInterval(updateClock, 1000)

        updateClock();
    }
    countTimer('02 september 2020');

// Меню
    let menuInterval;
    let menuAnimate = (scrollMenu) => {
        let count = 0
        const menuClick = () => {
            menuInterval = requestAnimationFrame(menuClick)
            count += 15
            if (count < scrollMenu) {
                scrollTo(0, count)
            } else cancelAnimationFrame(menuInterval)
        }
        menuClick()
    }

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');


        const handlerMenu = () => {
            menu.classList.toggle('active-menu')
        }

        btnMenu.addEventListener('click', handlerMenu)
        closeBtn.addEventListener('click', handlerMenu)




        menuItems.forEach((element) => element.addEventListener('click', (event) => {
            console.log(event.target.hash);
            let scrollMenu
            if (event.target.hash === '#service-block') {
                scrollMenu = 825
            }
            if (event.target.hash === '#portfolio') {
                scrollMenu = 2031
            }
            if (event.target.hash === '#calc') {
                scrollMenu = 3004.5
            }
            if (event.target.hash === '#command') {
                scrollMenu = 4140
            }
            if (event.target.hash === '#connect') {
                scrollMenu = 5046
            }
            menuAnimate(scrollMenu)
            handlerMenu()
        }))
    }

    toggleMenu()

//   Popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup')
        const popupBtn = document.querySelectorAll('.popup-btn')
        const popupClose = document.querySelector('.popup-close')
        const popupContent = document.querySelector('.popup-content')
        let count = 0





        let popupInterval;
        let popupAnimate = () => {
            popup.style.left = '0%'
            popupContent.style.left = '-100%'
            popup.style.display = 'block';
            const popupClick = () => {
                popupInterval = requestAnimationFrame(popupClick)
                count += 1
                if (count < 38) {
                    popupContent.style.left = count + '%'
                } else cancelAnimationFrame(popupInterval)
            }
            popupClick()
        }



        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (screen.width < 1000) {
                    popup.style.display = 'block';
                } else {
                    popupAnimate()
                }

            })
        })

        popupClose.addEventListener('click', () => {
            // popupContent.style.left = '-100%'
            popup.style.display = 'none';
            count = 0
        })
    }

    togglePopUp()






});
