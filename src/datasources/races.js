const { DataSource } = require("apollo-datasource");
//const db = require('../utils/connect')
const sequelize = require("sequelize");

var db = require("../../models");
var Races = db.races;
var Difficulties = db.difficulties;
var States = db.state;
var Materials = db.materials;
var Users = db.users;

class RaceAPI extends DataSource {
  async getAllRaces(args) {
    let filter = {};

    if (args.state || args.creator || args.participant) {
      filter.include = [];
    }
    if (args.state) {
      filter.include.push({
        model: db.state,
        where: { name: args.state }
      });
    }
    if (args.creator) {
      filter.include.push({
        model: db.users,
        as: "Creator",
        where: { id: args.creator }
      });
    }
    if (args.participant) {
      filter.include.push({
        model: db.users,
        where: { id: args.participant }
      });
    }

    return Races.findAll(filter);
  }
  async getRaceById(id) {
    return Races.findAll({
      where: {
        id: id
      }
    });
  }
  async getDifficulties() {
    return Difficulties.findAll();
  }
  async getStates(args) {
    let filters = {};

    if (args.filter) {
      filters = {
        where: { name: { [sequelize.Op.like]: "%" + args.filter + "%" } }
      };
    }
    return States.findAll(filters);
  }
  async getMaterials() {
    return Materials.findAll();
  }
  async createRace(race) {
    console.log(race);
    let test = Races.create({
      name: race.name,
      description: race.description,
      startDate: race.startDate,
      endDate: race.endDate,
      formType: race.formType,
      meetingHour: race.meetingHour,
      meetingLocation: race.meetingLocation,
      heightDifference: race.heightDifference,
      maxParticipant: race.maxParticipant,
      stateId: 1,
      difficultyId: race.difficultyId,
      creatorId: 2
    });

    console.log(test);
    return test;
  }
  async getUsers(args) {
    let filters = {};

    if (args.filter) {
      filters = {
        where: {
          [sequelize.Op.or]: [
            { firstname: { [sequelize.Op.like]: "%" + args.filter + "%" } },
            { lastname: { [sequelize.Op.like]: "%" + args.filter + "%" } }
          ]
        }
      };
    }
    return Users.findAll(filters);
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
