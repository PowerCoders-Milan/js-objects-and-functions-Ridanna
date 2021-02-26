// write your JS here
// remember to always test in the browser
// to see if everything works correctly

function ageCalculator(birthYear) {
    var currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
document.write('your age is: ' + ageCalculator(1993) + ' years old.');