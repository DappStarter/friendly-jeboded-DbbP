require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember erosion give kite bone since'; 
let testAccounts = [
"0xaa24106820ef71270ae50bd9f12da0e3b0975f1e3a35c14c179c2afb7d84e7d0",
"0xa945bdbdb1c52e87863bb1fba67080c32cf7ef6236064cc96c09681b1386048a",
"0x395f3b60754a75cd162708a903bb1ea0c026a29d884ec209a7eb71133f9ed63b",
"0xa4b6288737447d7f4dc679664ca7cb1e5c0f088466906280600a1c1b42f2e61a",
"0x32383b3f5e12bb8203f8d23f0fc4a7df67ca7986e9715185106379128521a4e0",
"0x027f4047b877c1a2efa3e0a17c206d48ab40969f804225dfeda3e98772a6385b",
"0xe57816d792f35e7fe85ed9cca98dbe14ff334d0250a34cb39260cdb6d9f23ca1",
"0x66564b43c570148b4b900c43522c2e1c90c2be92d281bdccad31562ff686af3d",
"0x2fe8a7bfe8a51d5be09fd01858fa95187ecc5bb898e9c222338733dc538c38b7",
"0x5051df8db1980742e3361986ca6aa188d762a19455c4094c1a252e5e06cdb426"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

