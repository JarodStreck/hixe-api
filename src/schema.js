const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = [
    gql`
        type Query {
            getRace: Race 
            getRaces: [Race] 
            getUserRaces: [Race] 
            createRaceformInfo: [Race]
        }
        type Mutation {
            createRace(race: String): Race
        }
        type Race{
            Id: ID
            startDate: String
            endDate: String
            state: String
            formType: String
            location: String
            raceType: String
            raceOwner: User
            meetingLocation: String
            meetingHour: String
            difficulty: String
            name: String
            heightDifference: Int
            maxParticipant: Int
            material: [Material]
            description: String
            group: Group
            participants: [User]

        }
        type User{
            firstname: String
            lastname: String
        }
        type Group{
            name: String
        }
        type Material{
            name: String
            description: String
        }

    `
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
module.exports = typeDefs;
