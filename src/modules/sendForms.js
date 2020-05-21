const sendForms = () => {
    const main = document.querySelector('main'),
        formMain = main.querySelector('form'),
        inputMain = formMain.querySelector('input');
    const errorMessage = 'Произошла ошибка при отправке данных на сервер',
        loadMessage = 'Пожалуйста, подождите...',
        successMessage = 'Ваши данные были успешно отправлены';
    const statusMessage = document.createElement('div');
    inputMain.addEventListener('input', ()=> {
        inputMain.value = inputMain.value.replace(/[^+\d]/g, '');
    });
    formMain.addEventListener('submit', event => {
        event.preventDefault();
        formMain.appendChild(statusMessage);
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            statusMessage.textContent = loadMessage;
            if(request.readyState !== 4) {
                return;
            }
            if(request.status === 200) {
                statusMessage.textContent = successMessage;
                inputMain.value = '';
            } else {
                statusMessage.textContent = errorMessage;
                inputMain.value = '';
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        const formData = new FormData(formMain);
        let body = {};
        formData.forEach((value, key) => {
            body[key] = value;
        });
        request.send(JSON.stringify(body));
    });



    const sectionForm = document.querySelector('.section-form'),
        formSection = sectionForm.querySelector('form'),
        name = document.getElementById('name_2'),
        phone = document.getElementById('phone_2');
    name.addEventListener('input', () => {
        name.value = name.value.replace(/[^а-я]/ig, '');
    });
    phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^+\d]/g, '');
    });
    formSection.addEventListener('submit', event => {
        event.preventDefault();
        formSection.appendChild(statusMessage);
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            statusMessage.textContent = loadMessage;
            if(request.readyState !== 4) {
                return;
            }
            if(request.status === 200) {
                statusMessage.textContent = successMessage;
                name.value = '';
                phone.value = '';
            } else {
                statusMessage.textContent = errorMessage;
                name.value = '';
                phone.value = ''; 
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        const formData = new FormData(formSection);
        let body = {};
        formData.forEach((value, key) => {
            body[key] = value;
        });
        request.send(JSON.stringify(body));
    });

};


export default sendForms;