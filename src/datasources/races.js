
const { DataSource } = require("apollo-datasource");
const db = require('../utils/connect')
class RaceAPI extends DataSource {
    /*initialize(config) {
        this.context = config.context;

    }*/

    async getAllRaces() {
        return [{
            name: "Epic",
        }]
    }

}
module.exports = RaceAPI;
