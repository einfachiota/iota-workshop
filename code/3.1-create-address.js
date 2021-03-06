///////////////////////////////
// Erstelle eine Adresse aus einem neuen Seed
///////////////////////////////

// Wir importieren die IOTA JS Blibliothek und erstellen ein IOTA Objekt mit einem Devnet Provider.
const iotaLibrary = require('@iota/core')
const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Dies ist unser seed, erstelle bitte deinen eigenen! 
// Erstens: Führe diesen Code in einem Unix-basierten Terminal aus, um einen Seed von 81 Tryte zu generieren.
// cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
// Zweitens: Füge die Ausgabe des obigen Codes in den nachfolgenden Abschnitt 'seed' ein.
const seed =
  'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D'

// Hiermit erstellen wir eine neue Adresse. 
iota
  .getNewAddress(seed, { index: 0, total: 1 })
  .then(address => {
    console.log('Deine  Adresse ist: ' + address)
    console.log('Trage sie hier ein, um Devnet Tokens zu bekommen https://faucet.devnet.iota.org')
  })
  .catch(err => {
    console.log(err)
  })
