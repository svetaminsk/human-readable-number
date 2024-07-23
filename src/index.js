module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbersTeenth = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbersTenth = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    
    let hundred = Math.floor(number / 100);

    if (number < 10) {
        for (let i = 0; i < 10; i++) {
            if (number == i) {
                result += numbers[i];
            }
        }
    } else if (number < 20) {
        for (let i = 10; i < 20; i++) {
            if (number == i) {
                result += numbersTeenth[i - 10];
            }
        }
    } else if (number < 100) {
        let remainder = number % 10;
        let tenth = Math.floor(number / 10);
        if (number % 10 == 0) {
            result += numbersTenth[number / 10];
        } else {
            result = numbersTenth[tenth] + ' ' + numbers[remainder];
        }
    } else if (number < 1000) {
        let remainder = (number % 100) % 10;
        let tenth = Math.floor((number % 100) / 10);
        if (number % 100 == 0) {
            return result = `${numbers[hundred]} hundred`;
        }
        if (tenth < 1) {
            result = `${numbers[hundred]} hundred ${numbers[number % 100]}`;
            return result;
        }
        if (tenth < 2) {
            result = `${numbers[hundred]} hundred ${numbersTeenth[(number % 100) - 10]}`;
            return result;
        }
        if (!remainder) {
            result = `${numbers[hundred]} hundred ${numbersTenth[tenth]}`;
        } else {
            result = `${numbers[hundred]} hundred ${numbersTenth[tenth]} ${numbers[remainder]}`;
        }
    }
    return result;
}
