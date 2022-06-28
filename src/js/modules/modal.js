const modals = () => {
  function bindModal( triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const allModals = document.querySelectorAll("[data-modal]");

    trigger.forEach((selector) => {
      selector.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        allModals.forEach((item) => {
          item.style.display = "none";
        });
        

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    allModals.forEach((item) => {
      item.style.display = "none";
    });

    close.addEventListener("click", (e) => {
      allModals.forEach((item) => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        allModals.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  // showModalByTime(".popup", 60000);
  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close" );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);


  
};

export default modals;
