
const inputNumbers = () => {
    let calcSCD = document.querySelectorAll('input.calc-item');
    calcSCD.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9]/, '');
        })

    })
}

export default inputNumbers;
