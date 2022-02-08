require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture stone riot night mixture gesture light army gentle'; 
let testAccounts = [
"0x1f8c8786c37c8ab08e612ded114b61652588e1c09b81997e002e9cde0cc4b0db",
"0x5b57ace2236dfa95c3f4bdf18d2bf7444dca77fb1cb844e8b8e9862ac22532b7",
"0x9f718697bcca335edabb38cc194f020518d4b6749f3d468369fcbf5921c27ba3",
"0x22710ab9011af9dd74e04d5ca0a6b18b18c9dc0333fce1953966fe6703c22cbf",
"0x729d7c94a5f54a6f02e68cb9ac1f526059ecec045046df19e219e0b8f11ed15d",
"0xe63437440d0bd68c70b5552892b0bd7c63f419588511c1bbe0e417d876e99882",
"0x2028d9ad5e9bda4d2618fd0232c52b11424eb1dd8234ae5bf5e493ab1f287fc9",
"0x38f1c7d4b7b640d6155a844647f54e837d8b2c0b53aeeb57bcc8620e50c87818",
"0xa1a946f8a7158c3afc311b62068ccdfbd537442bc51aabd2bae554defb26fd34",
"0x84dd947ce61a52bb3d6172af97ba217e28e9c8c8a1ee6db3ba18a152b093325b"
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

