const popUpConsult = () => {
    const popUpConsult = document.querySelector('.popup-consultation'),
        inputsConsult = popUpConsult.querySelectorAll('input'),
        form = popUpConsult.querySelector('form'),
        name = document.getElementById('name_13'),
        phone = document.getElementById('phone_13'),
        directorForm = document.querySelector('.director-form'),
        inputValue = directorForm.querySelector('input');
    name.addEventListener('input', () => {
        name.value = name.value.replace(/[^а-я]/ig, '');
    });
    phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^+\d]/g, '');
    });
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.consultation-btn')){
            event.preventDefault();
            popUpConsult.style.display = 'block';
        }
    });
    popUpConsult.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.popup-close') || !target.closest('.popup-content')){
            popUpConsult.style.display = 'none';
        }
    });
    form.addEventListener('submit', event => {
        event.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        const formData = new FormData(form);
        formData.append('question', inputValue.value);
        let body = {};
        formData.forEach((value, key) => {
            body[key] = value;
        });
        request.send(JSON.stringify(body));
        inputValue.value = '';
        inputsConsult.forEach(elem => {
            elem.value = '';
        });
        
    });
    
};
export default popUpConsult;