///////////////////////////////
// Lade deine  HELLOWORLD Nachricht aus dem Tangle
///////////////////////////////

// Wir importieren die IOTA JS Blibliothek und erstellen ein IOTA Objekt mit einem Devnet Provider.
const iotaLibrary = require('@iota/core')
const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Dise Adresse wollen wir überprügen.
const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99DMNFAQLWHD'

// Hiermit bekommen wir alle Transaktionen, die an diese Adresse gesendet wurden.
iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })
