var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function format(number) {
    var formatedNumber;
    if (number >= 0 && number <= 9) {
        formatedNumber = '0' + number;
        return formatedNumber;
    }
    else {
        return number;
    }
}

function getDate() {
    var date = new Date();
    var dateFormat = days[date.getDay()] + ", " + format(date.getHours()) + ":" + format(date.getMinutes()) + ":" + format(date.getSeconds());
    document.getElementById("time").innerHTML = dateFormat;
}

function startDate() {
    getDate();
    setInterval(getDate, 1000);
}

window.addEventListener('load', startDate, false);