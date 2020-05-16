const popUpCall = () => {
    const popUpCall = document.querySelector('.popup-call');

    document.body.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.call-btn')){
           popUpCall.style.display = 'block';
        }
    });
    popUpCall.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.popup-close') || !target.closest('.popup-content')){
            popUpCall.style.display = 'none';
        }
    });

};

//Настроить ошибку при закрытии окна с помощью кнопки крестик

export default popUpCall;