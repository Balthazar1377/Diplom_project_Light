const popUpCheck = () => {
    const popUpCheck = document.querySelector('.popup-check'),
        inputsCheck = popUpCheck.querySelectorAll('input');
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
};
export default popUpCheck;