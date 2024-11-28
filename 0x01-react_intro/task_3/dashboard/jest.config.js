module.exports = {
  // ... other Jest configuration ...
  transformIgnorePatterns: [ // Adjust this if needed
    "/node_modules/@wojtekmaj/enzyme-adapter-react-17/(?!.*TextEncoder)" // Exclude adapter
  ],
  setupFilesAfterEnv: ['./src/setupTests.js'], // Make sure setupTests runs
  testEnvironment: 'jsdom', // crucial for TextEncoder
};
