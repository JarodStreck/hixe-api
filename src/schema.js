const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = [
  gql`
    scalar Date

    type Query {
      getRace(id: ID): [Race]
      getRaces(id: ID): [Race]
      getUserRaces: [Race]
      getMaterials: [Material]
      createRaceformInfo: [Race]
    }

    type Difficulty {
      name: String
    }
    type State {
      name: String
    }
    type Material {
      name: String
    }
    type Group {
      name: String
    }
    type User {
      firstname: String
      lastname: String
      group: Group
    }
    type Race {
      Id: ID
      name: String
      description: String
      startDate: Date
      endDate: Date
      formType: String
      meetingHour: Date
      heightDifference: Int
      maxParticipant: Int
      state: State
      difficulty: Difficulty
      materials: [Material]
      participants: [User]
    }
  `
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
module.exports = typeDefs;
