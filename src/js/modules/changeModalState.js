import checkNumInputs from './checkNumInputs';

 const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
        item.addEventListener(event, () =>{

                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((checkbox, j) => {
                                checkbox.checked = false;
                            if(i === j) {
                                checkbox.checked = true; 
                            }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;  
                }
                if(Object.keys(state).length >= 3) {
                    document.querySelector('.popup_calc_button').removeAttribute('disabled');
                }
                if(Object.keys(state).length >= 5) {
                    document.querySelector('.popup_calc_profile_but').removeAttribute('disabled');
                }
        
            console.log(state);
        });
    });
}


bindActionToElems('click', windowForm, 'form');
bindActionToElems('input', windowHeight, 'height');
bindActionToElems('input', windowWidth, 'width');
bindActionToElems('change', windowType, 'type');
bindActionToElems('change', windowProfile, 'profile');
 };
  

 
 export default changeModalState;

