window.addEventListener('DOMContentLoaded', () => {

    const addZero = n => n < 10 ? '0' + n : n



    // Time

    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

function getTimeRemaining(){
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,

        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
    // console.log(timeRemaining);
    return {timeRemaining, hours, minutes, seconds }
}

    function updateClock() {
        let timer = getTimeRemaining();
        timerHours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);

        console.log(timer.timeRemaining);
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
    // setInterval(countTimer, 1000,'02 september 2020')






















});
