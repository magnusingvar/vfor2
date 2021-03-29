window.addEventListener('load', () => {

    interval = setInterval(checkTime, 100);

    function checkTime() {
        const timeDisplay = document.getElementById('time');
        const hoursDisplay = document.getElementById('hours');
        const minutesDisplay = document.getElementById('minutes');
        const secondsDisplay = document.getElementById('seconds');
        const dateDisplay = document.getElementById('date');
    
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        
        // Array fyrir daga
        currDate = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                 'Friday', 'Saturday']

        // Array fyrir manuðina
        currMonth = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December']

        let date = currentDate.getDate();
        let month = currentDate.getMonth();
        let day = currentDate.getDay();
        let year = currentDate.getFullYear();
    
        hoursDisplay.innerText = hours;
        minutesDisplay.innerText = minutes;
        secondsDisplay.innerText = seconds;
        
        // Sýna hvaða dagur, mánaðardagur, mánuður og ár er
        dateDisplay.innerText = currDate[day] + ", " + date + " " + currMonth[month] + " " + year;

        //  Ef að mínútur eru minna en 9 þá bætir það 0 fyrir framan svo það sé 01-09
        if (minutes<=9) {
            minutesDisplay.innerText = "0" + minutes;
        } else {
            minutesDisplay.innerText = minutes;
        }

        //  Ef að sekúndur eru minna en 9 þá bætir það 0 fyrir framan svo það sé 01-09
        if (seconds<=9) {
            secondsDisplay.innerText = "0" + seconds;
        } else {
            secondsDisplay.innerText = seconds;
        }
    }
});