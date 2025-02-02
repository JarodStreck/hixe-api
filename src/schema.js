const { gql } = require("apollo-server");
/* getUserRaces: [Race] */
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = [
  gql`
    scalar Date
    scalar Array

    type Query {
      getRace(id: ID): [Race]
      getRaces(state: Array, creator: Array, participant: Array): [Race]
      getMaterials: [Material]
      getDifficulties: [Difficulty]
      getStates(filter: String): [State]
      getCreator: User
      createRaceformInfo: [Race]
      getUsers(filter: String): [User]
      getUserRaces(filter: String, id: ID): [User]
    }

    type Mutation {
      createRace(
        name: String
        minParticipant: Int
        meetingHour: Date
        meetingLocation: Date
        startDate: Date
        endDate: Date
        heightDifference: String
        description: String
        maxParticipant: Int
        minParticipant: Int
        difficultyId: String
        formType: Int
        materials: Array
      ): Race
      
      login(firstname: String,lastname:String,email:String): loginResponse

    }

    type Difficulty {
      id: ID!
      name: String
    }
    type State {
      id: ID!
      name: String
    }
    type Material {
      id: ID!
      name: String
      check: Boolean
    }
    type Group {
      name: String
    }
    type User {
      id: ID
      firstname: String
      lastname: String
      email: String
      group: Group!
    }
    type Race {
      Id: ID
      name: String
      description: String
      startDate: Date
      endDate: Date
      formType: String
      meetingHour: Date
      meetingLocation: String
      heightDifference: Int
      maxParticipant: Int
      state: State
      difficulty: Difficulty
      materials: [Material]
      participants: [User]
      creator: User
    }
    input RaceInput {
      name: String
      description: String
      startDate: String
      endDate: String
      formType: String
      meetingHour: String
      meetingLocation: String
      heightDifference: Int
      maxParticipant: Int
      stateId: ID
      difficultyId: ID!
    }
    type loginResponse {
      token: String
      user: User
      error: String
    }
  `
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
module.exports = typeDefs;
