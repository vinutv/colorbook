const connection = require('nosql');

class Db {
    constructor() {
        this.shots = this.loadShotsDb();
    }

    loadShotsDb() {
        const db = connection.load('./server/database/shots.nosql');
        return db;
    }
}

export default Db;
