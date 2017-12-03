class Endpoint {
    constructor(db, dribbble) {
        this.db = db;
        this.dribbble = dribbble;
    }

    getPopularShots() {
        return new Promise((resolve, reject) => {
            const popularShots = this.db.shots.get('popular');
            const shotsLength = popularShots.size().value();

            if (shotsLength === 0) {
                this.dribbble
                    .savePopularShots()
                    .then((shots) => {
                        resolve({
                            success: true,
                            content: shots
                        });
                    })
                    .catch((errObject) => {
                        reject(errObject);
                    });
            } else {
                resolve({
                    success: true,
                    content: popularShots
                });
            }
        });
    }

    getShotsByDate(date) {
        return new Promise((resolve, reject) => {
            const datedShots = this.db.shots.get(date);
            const shotsLength = datedShots.size().value();

            if (shotsLength === 0) {
                this.dribbble
                    .saveShotsByDate(date)
                    .then((shots) => {
                        resolve({
                            success: true,
                            content: shots
                        });
                    })
                    .catch((errObject) => {
                        reject(errObject);
                    });
            } else {
                resolve({
                    success: true,
                    content: datedShots
                });
            }
        });
    }
}

export default Endpoint;
