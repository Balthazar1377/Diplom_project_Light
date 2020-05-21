const popUpCall = () => {
    const popUpCall = document.querySelector('.popup-call'),
        form = popUpCall.querySelector('form'),
        name = document.getElementById('name_1'),
        phone = document.getElementById('phone_1'),
        inputsCall = popUpCall.querySelectorAll('input');

    name.addEventListener('input', () => {
        name.value = name.value.replace(/[^а-я]/ig, '');
    });
    phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^+\d]/g, '');
    });
    document.body.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.call-btn')){
           popUpCall.style.display = 'block';
           inputsCall.forEach(elem => {
               elem.toggleAttribute('required');
           });
        }
    });
    popUpCall.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.popup-close') || !target.closest('.popup-content')){
            popUpCall.style.display = 'none';
            inputsCall.forEach(elem => {
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
        inputsCall.forEach(elem => {
            elem.value = '';
        });
    });
};
export default popUpCall;