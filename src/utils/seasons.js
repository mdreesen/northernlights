const { DateTime } = require("luxon");

function seasons() {
    const date = DateTime.now().toObject()
    const summer = date.month === 5 || date.month === 6 || date.month === 7 || date.month === 8;
    const fall = date.month === 9 || date.month === 10 || date.month === 11;
    if (summer) {
        return 'summer';
    }
    if (fall) {
        return 'fall'
    } else {
        return 'fall';
    }
}

export default seasons;