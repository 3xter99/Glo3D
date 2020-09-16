window.addEventListener('DOMContentLoaded', () => {


    // 1) _________Time

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
    countTimer('10 september 2020');
//___________________________конец time


// 2)________Меню_____________

//  _________анимация меню____
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
            } else if (target.closest('.active-menu>ul>li')) {
                menuAnimate(event.target.hash)
                handlerMenu()
            } else if (target.closest('.menu')) {
                handlerMenu()
            } else if (target.closest('.scroll_btn')) {
                menuAnimate('#service-block')
            }
        })
    }

    toggleMenu()

//  3) _________Popup_________-
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
    togglePopUp()

// 4) _______Табы________-

const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                tab[i].classList.add('active')
                tabContent[i].classList.remove('d-none')
            } else {
                tabContent[i].classList.add('d-none')
                tab[i].classList.remove('active')
            }
        }
    }

    tabHeader.addEventListener('click', (event) => {

        let target = event.target;
            target = target.closest('.service-header-tab');

        if (target) {
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i)
                }
            })
        }
    })
}
    tabs()

//    5)_________слайдер_________

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            allDots = document.querySelector('.portfolio-dots')

        let currentSlide = 0,
            interval;

        const addDots = () => {
            slide.forEach(() => {
                let li = document.createElement('li')
                li.classList.add('dot')
                allDots.append(li)
            })

        }
        addDots()
        let dot = document.querySelectorAll('.dot')

        const prevSlide = (element, index, strClass) => {
            element[index].classList.remove(strClass)

        }
        const nextSlide = (element, index, strClass) => {
            element[index].classList.add(strClass)

        }

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active')
            prevSlide(dot, currentSlide, 'dot-active')
            currentSlide++
            if (currentSlide >= slide.length) {
                currentSlide = 0
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active')
            nextSlide(dot, currentSlide, 'dot-active')

        }

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time)

        }

        const stopSlide = () => {
            clearInterval(interval )

        }

        // переключение слайдов по нажатию кнопки или точки

        slider.addEventListener('click', event => {
            event.preventDefault()
            let target = event.target
            if (!target.matches('.portfolio-btn, .dot')) {
                return
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active')
            prevSlide(dot, currentSlide, 'dot-active')

            if (target.matches('#arrow-right')) {
                currentSlide++
            } else if (target.matches('#arrow-left')) {
                currentSlide--
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index
                    }
                })
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active')
            nextSlide(dot, currentSlide, 'dot-active')
        })

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide()
            }

        })
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide()
            }

        })



        startSlide(1500)


    }
    slider()


//    Смена фото у команды
    let changePhoto = () => {
        const commandPhoto = document.querySelectorAll('.command__photo');

        commandPhoto.forEach((item) => {
            item.addEventListener('mouseenter', (event) => {
                [event.target.dataset.img, event.target.src] = [event.target.src, event.target.dataset.img]
            })
        })
        commandPhoto.forEach((item) => {
            item.addEventListener('mouseout', (event) => {
                [event.target.dataset.img, event.target.src] = [event.target.src, event.target.dataset.img]
            })
        })

    }
    changePhoto()


//    Запрет ввода букв
    const inputNumbers = () => {
        let calcSCD = document.querySelectorAll('input.calc-item');
        calcSCD.forEach((item) => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9]/, '');
            })

        })
    }
    inputNumbers()


//    Калькулятор

    const calc = (price = 100) => {

        const calcBlock = document.querySelector('.calc-block'),
              calcType = document.querySelector('.calc-type'),
              calcSquare = document.querySelector('.calc-square'),
              calcCount = document.querySelector('.calc-count'),
              calcDay = document.querySelector('.calc-day'),
              totalValue = document.getElementById('total')


        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1
            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value
            
            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10
            }

            if (calcDay.value && calcDay.value < 5) {
              dayValue *= 2
            } else if (calcDay.value && calcDay.value < 10) {
              dayValue *= 1.5
            }


            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;

            }

            // Анимация чисел в калькуляторе_____________________
            let count = 0
            function animationCalc() {
                let step = total / 31
                if (count >= total) {
                    clearInterval(idInterval)
                    totalValue.textContent = Math.round(total)
                } else {
                    count += step
                    totalValue.textContent = Math.round(count)
                }

            }
            let idInterval = setInterval(animationCalc, 30)

            animationCalc();
        //    _______________________

        }
        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum()
            }
        })

    }
    calc(100)


    const sendForm = (id, color) => {
        const errorMessage = 'Что то пошла не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с Вами свяжемся'

        const form = document.getElementById(`${id}`)
        let userName = document.getElementsByName('user_name')
        let userEmail = document.getElementsByName('user_email')
        let userPhone = document.getElementsByName('user_phone')
        let userMessage = document.getElementsByName('user_message')
        const preloader = document.querySelector('.preloader')
        form.addEventListener('input', (event) => {
            const target = event.target
            if (target.name === 'user_phone') {
                target.value = target.value.replace(/[^0-9\+]/, '')
            }
            if (target.name === 'user_message' || target.name === 'user_name') {
                target.value = target.value.replace(/[^А-Яа-я\s]/, '')
            }
        })

        const statusMessage = document.createElement('div')
        statusMessage.style.cssText = `font-size: 2rem; color: ${color}`

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            form.appendChild(statusMessage)
            preloader.classList.remove('loaded')

            const formDara = new FormData(form)
            let body = {}

            formDara.forEach((val, key) => {
                body[key] = val
            })

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('Статус нетворк нот 200')
                    }
                    preloader.classList.add('loaded')
                    userName.forEach(item => item.value = '')
                    userEmail.forEach(item => item.value = '')
                    userPhone.forEach(item => item.value = '')
                    userMessage.forEach(item => item.value = '')
                    statusMessage.textContent = successMessage
                        setTimeout(() => {
                            statusMessage.textContent = ''
                        }, 4000)
                })
                .catch(() => {
                        statusMessage.textContent = errorMessage
                    preloader.classList.add('loaded')
                })
        })

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)

            })
        }

    }
    sendForm('form1')
    sendForm('form2')
    sendForm('form3', 'white')




    




});
