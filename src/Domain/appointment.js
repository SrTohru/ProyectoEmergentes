class Appointment {
    constructor(id = null, date, hours, place, description) {
        this.id = id;
        this.date = date;
        this.hours = hours;
        this.place = place;
        this.description = description;
    }
}

module.exports = Appointment;
