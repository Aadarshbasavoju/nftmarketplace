module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "./node_modules/solc/soljson-v0.8.20+commit.a1b79de6.js", // Use locally installed solc
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    },
  },
};
