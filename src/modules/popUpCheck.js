const popUpCheck = () => {
    const popUpCheck = document.querySelector('.popup-check'),
        form = popUpCheck.querySelector('form'),
        name = document.getElementById('name_12'),
        phone = document.getElementById('phone_12'),
        inputsCheck = popUpCheck.querySelectorAll('input');
    name.addEventListener('input', () => {
        name.value = name.value.replace(/[^а-я]/ig, '');
    });
    phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^+\d]/g, '');
    });
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.check-btn')){
            popUpCheck.style.display = 'block';
            inputsCheck.forEach(elem => {
                elem.toggleAttribute('required');
            });
        }
    });
    popUpCheck.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.popup-close') || !target.closest('.popup-content')){
            popUpCheck.style.display = 'none';
            inputsCheck.forEach(elem => {
                elem.toggleAttribute('required');
            });
        }
    });
    form.addEventListener('submit', event => {
        event.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        const formData = new FormData(form);
        let body = {};
        formData.forEach((value, key) => {
            body[key] = value;
        });
        request.send(JSON.stringify(body));
        inputsCheck.forEach(elem => {
            elem.value = '';
        });
    });
};
export default popUpCheck;