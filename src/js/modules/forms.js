import checkNumInputs from './checkNumInputs';

const forms = (state) => {

  const form = document.querySelectorAll("form");
  const inputs= document.querySelectorAll("input");
  const modal = document.querySelector('.popup_engineer');
  
  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const clearState = () => {
      for(let prop of Object.keys(state)) {
        delete state[prop];
      }
    };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if(item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }


      postData('assets/server.php', formData)
      .then(res => {
        console.log(res);
        statusMessage.textContent = message.success;
      })
      .catch( () =>  statusMessage.textContent = message.failure)
      .finally(() => {
        clearInputs();
        setTimeout(() => {
            statusMessage.remove();
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 4000);
        setTimeout(() => {
          document.querySelector('.popup_calc_end').style.display = 'none';
            document.body.style.overflow = '';
            clearState();
        }, 5000);
        
      });

    });
  });


};


export default forms;
