
let body =document.querySelector('body')
let dayOfWeek = ['Воскресенье', 'Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота']
let data = new Date()
let hours = data.getHours()
console.log(hours)

function timeOfDay() {
    let partDay
    if (hours >= 0 && hours < 6) {
        partDay = 'ой ночи'
    } else if (hours >=6 && hours < 12) {
        partDay = 'ое утро'
    } else if (hours >= 12 && hours < 18) {
        partDay = 'ый день'
    } else partDay = 'ый вечер'
    return partDay
}

function getTimeRemaining(){
    let dateStop = new Date('1 january 2021').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000;
    return Math.floor(timeRemaining / 60 / 60 / 24)
}

element = document.createElement('div')
element.style.fontSize = '100px'
element.textContent = `Добр${ timeOfDay()}
Сегодня: ${dayOfWeek[data.getDay()]}
Текущее время: ${data.toLocaleTimeString('en')} 
До нового года осталось ${getTimeRemaining()} дней`

body.append(element)
