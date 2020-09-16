

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

export default changePhoto;
