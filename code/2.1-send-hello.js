///////////////////////////////
// Sende eine HELLOWORLD Nachricht in den Tangle
///////////////////////////////

// Wir importieren die IOTA JS Blibliothek und erstellen ein IOTA Objekt mit einem Devnet Provider.
const iotaLibrary = require('@iota/core')
const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Dies ist unsere IOTA Empfänger Adresse. An diese Werden wir eine "HELLO WORLD" Nachricht schicken.
const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D'

// Dies ist unser Seed. Mithilfe des Seeds schicken wir die Nachricht.
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

const converter = require('@iota/converter')

const nachricht = "HELLOWORLD"

const nachricht_in_trytes = converter.asciiToTrytes(nachricht)

// Wir erstellen ein Transfer Objekt. Dieses enthält die Anzahl der IOTA Tokens, eine Empfäger Adresse und ein optionaler Tag.
// Beachte bitte, das sich unser Transfer Objekt in einen Array befindet - somit wäre es auch möglich, mehrere Transvers gleichzeitig zu versenden. 
const transfers = [
  {
    value: 0,
    address: address,
    message: nachricht_in_trytes
  }
]

// Hier bereiten wir alles vor uns senden die Transaktion zum Tangle. Wenn alles klappt hat, bekommt ihr ein Budle Objekt in der Konsole angezeigt.
iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
  .then(bundle => {
    console.log(bundle)
  })
  .catch(err => {
    console.error(err)
  })
