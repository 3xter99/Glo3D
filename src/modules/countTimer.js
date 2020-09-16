
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
    // updateClock();
}

export default countTimer
