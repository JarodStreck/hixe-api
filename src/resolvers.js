const resolvers = {
  Query: {
    getRaces: async (_, __, { dataSources }) => {
      console.log("ok");
      return dataSources.raceAPI.getAllRaces();
    },
    getRace: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.getRaceById(args.id);
    },
    getDifficulties: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getDifficulties();
    },
    getStates: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getStates();
    },
    getMaterials: async (_, __, { dataSources }) => {
      return dataSources.raceAPI.getMaterials();
    }
  },
  Mutation: {
    createRace: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.createRace(args);
    }
  },

  Race: {
    async state(race) {
      return race.getState();
    },
    async difficulty(race) {
      return race.getDifficulty();
    },
    async materials(race) {
      return race.getMaterials();
    },
    async participants(race) {
      return race.getUsers();
    }
    // state: async (obj, args, context, info) =>
    //     context.db.state.findByPk(obj.stateId),
    // difficulty: async (obj, args, context, info) =>
    //     context.db.difficulties.findByPk(obj.difficultyId)
  }
};
module.exports = resolvers;
