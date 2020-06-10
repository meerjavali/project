module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

 networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,//7545,
      network_id: "*" // Match any network id
    },
	 advanced: {
     port: 8080,             // Custom port
     network_id: "*",       // Custom network
      // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
     websockets: true        // Enable EventEmitter interface for web3 (default: false)
    }
 }   
 
};