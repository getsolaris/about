const BIRTHDAY_YEAR = 2000;

function __init() {
    years();
}

// setup information years
function years() {
    let date = new Date();
    let currentYear = date.getFullYear() + 1; // Korea Years +1
    let year = currentYear - BIRTHDAY_YEAR + ' Years old';

    $('#information-years').html(year);
}

$(document).ready(function () {
    __init();
});
