const popUpDiscount = () => {
    const popUpDiscount = document.querySelector('.popup-discount'),
        inputsDiscount = popUpDiscount.querySelectorAll('input');
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.discount-btn')){
            popUpDiscount.style.display = 'block';
            inputsDiscount.forEach(elem => {
                elem.toggleAttribute('required');
            });
        }
    });
    popUpDiscount.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.popup-close') || !target.closest('.popup-content')){
            popUpDiscount.style.display = 'none';
            inputsDiscount.forEach(elem => {
                elem.toggleAttribute('required');
            });
        }
    });
};
export default popUpDiscount;