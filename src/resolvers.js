const resolvers = {
  Query: {
    getRaces: async (_, args, { dataSources }) => {
      console.log(args);
      return dataSources.raceAPI.getAllRaces(args);
    },
    getRace: async (_, args, { dataSources }) => {
      return dataSources.raceAPI.getRaceById(args.id);
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
