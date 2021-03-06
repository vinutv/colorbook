import moment from 'moment';

class Helpers {
    static daysAgo(date) {
        return moment().diff(moment(date), 'days');
    }

    static randomId() {
        return Math.random().toString(36).substring(7);
    }

    static validTimelineDate(date) {
        const dateDiff = moment().diff(date, 'days');
        const dateValid = moment(date).isValid() && (dateDiff >= 0) && (moment(date).format('YYYY-MM-DD') === date);

        return dateValid;
    }

    static getPreviousDay(date) {
        return moment(date).subtract(1, 'day').format('YYYY-MM-DD');
    }

    static copy(content) {
        const inputArea = document.createElement('input');
        const appRoot = document.getElementById('app');
        appRoot.appendChild(inputArea);
        inputArea.value = content;
        inputArea.select();
        document.execCommand('copy');
        appRoot.removeChild(inputArea);
    }
}

export default Helpers;
