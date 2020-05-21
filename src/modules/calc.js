const calc = () => {
    const accordion = document.getElementById('accordion'),
        selectBox = accordion.querySelectorAll('.select-box'),
        titleText = accordion.querySelectorAll('.title-text'),
        check = accordion.querySelector('.one'),
        checkOne = accordion.querySelector('.two'),
        expand = document.querySelectorAll('.expand'),
        lastValue = document.querySelector('.last-value');
    let plusSum,
        countCam;
    titleText[1].textContent = '';
    selectBox[2].style.display = 'none';
    selectBox[3].style.display = 'none';

    accordion.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.one')){
            check.classList.toggle('second');
        }
        if(target.closest('.two')){
            checkOne.classList.toggle('three');
        }
        if(check.classList.contains('second')){
            selectBox[2].style.display = 'inline-block';
            selectBox[3].style.display = 'inline-block';
            countCam = 15000;
            plusSum = 2000;
        } else{
            selectBox[2].style.display = 'none';
            selectBox[3].style.display = 'none';
            countCam = 10000;
            plusSum = 1000;
        }
        if(checkOne.classList.contains('three')){
            plusSum = 0;
        }
    });
    const calcResult = document.getElementById('calc-result');
    const sum = () => {
        let total = 0;
        
        let expand0 = parseFloat(expand[0].options[expand[0].selectedIndex].value);
        if(expand0 === 2){
            expand0 = countCam * 0.2;
        } else {
            expand0 = 0;
        }
        let expand1 = parseFloat(expand[1].options[expand[1].selectedIndex].value);
        if(expand1 === 2){
            expand1 = countCam * 0.3;
        } else if(expand1 === 3){
            expand1 = countCam * 0.5;
        } else {
            expand1 = 0;
        }
        let expand2 = parseFloat(expand[2].options[expand[2].selectedIndex].value);
        if(expand2 === 2){
            expand2 = countCam * 0.2;
        } else {
            expand2 = 0;
        }
        let expand3 = parseFloat(expand[3].options[expand[3].selectedIndex].value);
        if(expand3 === 2){
            expand3 = countCam * 0.3;
        } else if(expand3 === 3){
            expand3 = countCam * 0.5;
        } else {
            expand3 = 0;
        }
        const lastValueCount = lastValue.value;
        if(countCam === 10000){
            total = countCam + expand0 + expand1 + plusSum;
        } else if(countCam === 15000){
            total = countCam + expand0 + expand1 + expand2 + expand3 + plusSum;
        }
        calcResult.value = total;
    };
    accordion.addEventListener('change', event => {
        const target = event.target;
        if(target.matches('#myonoffswitch') || target.matches('.expand') || 
        target.matches('#myonoffswitch-two') || target.matches('.last-value')){
            sum();
        }
    });
    const popUpDiscount = document.querySelector('.popup-discount'),
        form = popUpDiscount.querySelector('form'),
        btnDiscount = document.querySelector('.key-btn'),
        name = document.getElementById('name_11'),
        phone = document.getElementById('phone_11');
    btnDiscount.addEventListener('click', () => {
        popUpDiscount.style.display = 'block';
    });
    name.addEventListener('input', () => {
        name.value = name.value.replace(/[^а-я]/ig, '');
    });
    phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^+\d]/g, '');
    });
    form.addEventListener('submit', event => {
        event.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        const formData = new FormData(form);
        if(!check.classList.contains('second')){
            formData.append('countCamers', 'two');
            formData.append('diam', expand[2]);
            formData.append('countCircles', expand[3]);
        } else {
            formData.append('countCamers', 'one');
            formData.append('diam1', expand[0].value);
            formData.append('countCircles1', expand[1].value);
            formData.append('diam2', expand[2].value);
            formData.append('countCircles2', expand[3].value);
        }
        if(checkOne.classList.contains('three')){
            formData.append('Presense of bottom', 'no');
        } else {
            formData.append('Presense of bottom', 'yes');
        }
        formData.append('way', lastValue.value);
        let body = {};
        formData.forEach((value, key) => {
            body[key] = value;
        });
        request.send(JSON.stringify(body));
        lastValue.value = '';
        name.value = '';
        phone.value = '';
    });
};


export default calc;