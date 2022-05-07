const leapYears = function (leapYear) {
    if (leapYear % 4 === 0) {
        if (leapYear % 4 === 0 && leapYear % 400 === 0) return true;
        if (leapYear % 4 === 0 && leapYear % 100 === 0) return false;
        return true;
    } else return false;

    // return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
