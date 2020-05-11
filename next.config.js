module.exports = {
  env: {
    mongoDev: "mongodb://jason:covid19@ds211708.mlab.com:11708/open_ppe",
  },
  webpack(config) {
    config.resolve.modules.push(__dirname);

    return config;
  },
};
