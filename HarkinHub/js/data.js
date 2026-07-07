/* =========================
   HARKINHUB DATA LAYER
========================= */

window.Data = {

    get(key, fallback) {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    },

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    remove(key) {
        localStorage.removeItem(key);
    },

    homework() {
        return this.get("homework", []);
    },

    setHomework(data) {
        this.set("homework", data);
    },

    timetable() {
        return this.get("timetable", []);
    },

    setTimetable(data) {
        this.set("timetable", data);
    },

    announcements() {
        return this.get("announcements", []);
    },

    setAnnouncements(data) {
        this.set("announcements", data);
    },

   housePoints() {

    const records = this.get("housePoints", []);

    return records.reduce((total, record) => {

        return total + Number(record.points || 0);

    }, 0);

},

    setHousePoints(value) {
        this.set("housePoints", value);
    }

};