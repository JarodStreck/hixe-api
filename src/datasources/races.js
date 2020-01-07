
const { DataSource } = require("apollo-datasource");
//const db = require('../utils/connect')

var db = require('../../models')
var Races = db.races;
class RaceAPI extends DataSource {
    /*initialize(config) {
        this.context = config.context;

    }*/

    async getAllRaces() {

        // let sql;
        // sql = 'SELECT races.id,races.name,description,startDate,endDate,formType,location,meetingLocation,meetingHour,heightDifference,maxParticipant,states.name as state,difficulties.name AS difficulty FROM races INNER JOIN states ON state_id = states.id INNER JOIN difficulties ON difficulty_id = difficulties.id;'

        // const races = await this.promiseSQLQuery(sql)
        // for (var race of races) {
        //     sql = 'SELECT materials.name,materials.description FROM neededMaterials INNER JOIN materials ON neededMaterials.material_id = materials.id INNER JOIN races ON races.id = neededMaterials.race_id WHERE neededMaterials.race_id = ' + race.id
        //     const materials = await this.promiseSQLQuery(sql)
        //     sql = 'SELECT  firstname,lastname FROM participants INNER JOIN users ON users.id = user_id WHERE race_id =' + race.id;
        //     const participants = await this.promiseSQLQuery(sql)
        //     race.material = materials
        //     race.participants = participants

        // }
        console.log(Races.findAll())
        return Races.findAll()
    }

    // async promiseSQLQuery(query) {
    //     return new Promise((resolve, reject) => {
    //         db.query(query, (error, results, fields) => {
    //             if (error) console.log(error);
    //             resolve(JSON.parse(JSON.stringify(results)))
    //         })
    //     })
    // }

}
module.exports = RaceAPI;
