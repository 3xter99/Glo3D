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


        menuItems.forEach((element) => element.addEventListener('click', handlerMenu))
    }

    toggleMenu()

//   Popup 16:31






});
