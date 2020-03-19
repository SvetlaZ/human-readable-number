module.exports = function toReadable (number) {
    let from0_to9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let from10_to19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let from20_to90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 0 && number <= 9) {
        return from0_to9[number];
    } else if (number >= 10 && number <= 19) {
        return from10_to19[number - 10];
    } else if (number >= 20 && number <= 90 && number % 10 === 0) {
        return from20_to90[number/10 - 2];
    } else if (number > 20 && number < 100) {
        return String(from20_to90[Math.floor(number / 10) - 2]) + ' ' + String(from0_to9[number % 10]);
    } else if (number >= 100 && number <= 900 && number % 100 === 0) {
        return from0_to9[number / 100] + ' hundred';
    } else if (number > 100 && number < 110 ||
                number > 200 && number < 210 ||
                number > 300 && number < 310 ||
                number > 400 && number < 410 ||
                number > 500 && number < 510 ||
                number > 600 && number < 610 ||
                number > 700 && number < 710 ||
                number > 800 && number < 810 ||
                number > 900 && number < 910) {
        return from0_to9[Math.floor(number / 100)] + ' hundred ' + from0_to9[number % 100];
    } else if (number >= 110 && number <= 119 ||
                number >= 210 && number <= 219 ||
                number >= 310 && number <= 319 ||
                number >= 410 && number <= 419 ||
                number >= 510 && number <= 519 ||
                number >= 610 && number <= 619 ||
                number >= 710 && number <= 719 ||
                number >= 810 && number <= 819 ||
                number >= 910 && number <= 919) {
        return from0_to9[Math.floor(number / 100)] + ' hundred ' + from10_to19[number % 10];
    } else if (number >= 120 && number <= 190 && number % 10 === 0 ||
                number >= 220 && number <= 290 && number % 10 === 0 ||
                number >= 320 && number <= 390 && number % 10 === 0 ||
                number >= 420 && number <= 490 && number % 10 === 0 ||
                number >= 520 && number <= 590 && number % 10 === 0 ||
                number >= 620 && number <= 690 && number % 10 === 0 ||
                number >= 720 && number <= 790 && number % 10 === 0 ||
                number >= 820 && number <= 890 && number % 10 === 0 ||
                number >= 920 && number <= 990 && number % 10 === 0    ) {
        return from0_to9[Math.floor(number / 100)] + ' hundred ' + from20_to90[(number % 100) / 10 - 2];
    } else if (number >= 120 && number <= 199 ||
                number >= 220 && number <= 299 ||
                number >= 320 && number <= 399 ||
                number >= 420 && number <= 499 ||
                number >= 520 && number <= 599 ||
                number >= 620 && number <= 699 ||
                number >= 720 && number <= 799 ||
                number >= 820 && number <= 899 ||
                number >= 920 && number <= 999    ) {
        return from0_to9[Math.floor(number / 100)] + ' hundred ' + from20_to90[Math.floor((number % 100) / 10) - 2] + ' ' + from0_to9[number % 10];
    }
    
}
