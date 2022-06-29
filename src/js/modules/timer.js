const timer = (id, deadline) => {
    const getZero = (num) => {
        if(num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {

    
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60) % 24));
        const days = Math.floor((t / (1000 * 60 * 60  * 24)));


        return {
            total: t,
            days, 
            hours, 
            minutes, 
            seconds
        };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);

        updateClock();
    
        function updateClock () {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total < 0) {
                days.innerHTML = '00',
                hours.innerHTML = '00',
                minutes.innerHTML = '00',
                seconds.innerHTML = '00',
                clearInterval(timeInterval);
                const p = document.createElement('div');
                p.textContent = 'Акция закончилась!';
                p.classList.add('action_end');
                document.querySelector('.action').appendChild(p);
            } 
        }
    };

    setClock(id, deadline);
};


export default timer;