module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest" 
    },
    moduleFileExtensions: ["js", "json", "jsx"],
    testMatch: ["**/*.test.js"],
    testEnvironment: "node"
  };