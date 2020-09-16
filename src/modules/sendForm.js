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

export default sendForm;
