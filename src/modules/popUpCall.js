const popUpCall = () => {
    const popUpCall = document.querySelector('.popup-call'),
        inputsCall = popUpCall.querySelectorAll('input');

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
};
export default popUpCall;