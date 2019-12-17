const resolvers = {
    Query: {
        getRaces: async (_, __, { dataSources }) => {
            console.log("ok")
            return dataSources.raceAPI.getAllRaces();
        }
    },
};
module.exports = resolvers;
