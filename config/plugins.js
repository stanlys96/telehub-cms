module.exports = () => ({
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  rest: {
    defaultLimit: 100,
    maxLimit: 1000, // Set this to your desired maximum limit
  },
});
