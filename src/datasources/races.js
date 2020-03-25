const { DataSource } = require("apollo-datasource");
//const db = require('../utils/connect')
const sequelize = require("sequelize");
const jwt = require('jsonwebtoken');
var db = require("../../models");
var Races = db.races;
var Difficulties = db.difficulties;
var States = db.state;
var Materials = db.materials;
var Users = db.users;
var Participant = db.participants;

class RaceAPI extends DataSource {
  async getAllRaces(args) {
    let filter = {};

    if (args.state || args.creator || args.participant) {
      filter.include = [];
    }
    if (args.state) {
      filter.include.push({
        model: db.state,
        where: { name: args.state.name }
      });
    }
    if (args.creator) {
      filter.include.push({
        model: db.users,
        as: "Creator",
        where: { id: args.creator.id }
      });
    }
    if (args.participant) {
      filter.include.push({
        model: db.users,
        where: { id: args.participant.id }
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
    let newRace = await Races.create({
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

    race.materials.map(material => {
      newRace.addMaterials(material.id, { through: db.neededMaterials });
    });

    return newRace;
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
  async login(args) {
    var user;
    var token;
    user = await Users.findOne({ where: { email: args.email } })
    if (user) {
      token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
      console.log("user already exist")
    }
    else {
      user = await Users.create({ email: args.email, firstname: args.firstname, lastname: args.lastname })
      token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
      console.log("user created")
    }

  async getUserRaces(args) {
    let filter = {};
    
    if (!args.id) {
      return "Missing id parameter"
    }
    
    const users = await Users.findAll({
      include: {
        model: Races, 
        through: Participant,
        as: "races"
      }, 
      where: { 
        id: args.id 
      }
    });
    return users
  
    /* let filter = {};

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

    return Races.findAll(filter); */
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
