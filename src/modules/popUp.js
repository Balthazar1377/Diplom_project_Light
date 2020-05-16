const popUp = () => {
    //popUpCall
    const popUpCall = document.querySelector('.popup-call'),
        inputs = popUpCall.querySelectorAll('input');

    document.body.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.call-btn')){
           popUpCall.style.display = 'block';
           inputs.forEach(elem => {
               elem.toggleAttribute('required');
           });
        }
    });
    popUpCall.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.popup-close') || !target.closest('.popup-content')){
            popUpCall.style.display = 'none';
            inputs.forEach(elem => {
                elem.toggleAttribute('required');
            });
        }
    });

};
export default popUp;