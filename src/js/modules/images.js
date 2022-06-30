const images = () => {

    const imgPopup = document.createElement('div');
   const workSection = document.querySelector('.works');
   const bigImage = document.createElement('img');

   imgPopup.classList.add('popupImg');
   workSection.appendChild(imgPopup);

 
   imgPopup.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
   `;
   imgPopup.appendChild(bigImage);

   workSection.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if(target && target.classList.contains('preview')) {
        imgPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      document.querySelector('.scrollUp').style.display = 'none';

        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path);
    }

    if(target && target.matches('div.popupImg')) {
        imgPopup.style.display = 'none';
        document.body.style.overflow = '';
    }
   }); 
};
 
export default images;