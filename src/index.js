const { ApolloServer } = require('apollo-server');
const typeDefs = require("./schema.js");
//const { makeExecutableSchema } = require("graphql-tools");
const RaceAPI = require("./datasources/races.js")
const resolvers = require("./resolvers.js");
const db = require('../models');

const dataSources = () => ({
    raceAPI: new RaceAPI,
});

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
    context: { db },
    dataSources
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

module.exports = {
    dataSources,
    ApolloServer,
    server,
    resolvers,
    typeDefs
};