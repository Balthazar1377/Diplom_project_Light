const btnMore = () => {
    const hiddenBlocks = document.querySelectorAll('.hidden'),
        button = document.querySelector('.add-sentence-btn');
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.add-sentence-btn')){
            hiddenBlocks.forEach(elem => {
                elem.classList.remove('hidden');
                button.style.display = 'none';
            });
        }
    });
};
export default btnMore;