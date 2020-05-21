const tabsCalc = () => {
    const accordion = document.getElementById('accordion'),
        panelHeading = accordion.querySelectorAll('.panel-heading'),
        panelCollapse = accordion.querySelectorAll('.panel-collapse'),
        constructBtn = document.querySelectorAll('.construct-btn');
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
    accordion.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.construct-btn');
        if(target){
            constructBtn.forEach((item, i) => {
                if(item === target){
                    tab(i + 1);
                }
            });   
        }
    });
};


export default tabsCalc;