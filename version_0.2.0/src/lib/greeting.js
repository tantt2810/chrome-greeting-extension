const greeting = {
    getGreetingMessage: function() {
        let thehours = new Date().getHours();
        let message;
        let morning = ('Good morning');
        let afternoon = ('Good afternoon');
        let evening = ('Good evening');

        if (thehours >= 0 && thehours < 12) {
            message = morning;

        } else if (thehours >= 12 && thehours < 17) {
            message = afternoon;

        } else if (thehours >= 17 && thehours < 24) {
            message = evening;
        }
        return message;
    }
}

export default greeting;