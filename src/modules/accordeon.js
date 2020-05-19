const accordeon = () => {
    const panelGroup = document.getElementById('accordion-two'),
        panelHeading = panelGroup.querySelectorAll('.panel-heading'),
        panelCollapse = panelGroup.querySelectorAll('.panel-collapse');
    const tab = index => {
        for(let i = 0; i < panelCollapse.length; i++){
            if(index === i){
                panelCollapse[i].classList.add('in');
            } else {
                panelCollapse[i].classList.remove('in'); 
            }
        }
    };
    document.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.panel-heading');
        if(target){
            panelHeading.forEach((item, i) => {
                if(item === target){
                    tab(i);
                }
            });
        }
    });
};


export default accordeon;
