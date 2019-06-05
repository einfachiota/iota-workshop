///////////////////////////////
// Send Data
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Erstelle einen Seed und trage ihn hier ein.
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

// Empfänger Adresse (z.B kannst du eine Adresse aus dem Seed generieren und hier eintragen.
const address =
  'LOREMOORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD'

const Converter = require('@iota/converter')

// Zwischen die Anführungszeichen kommt deine Nachricht.
// Benutze keine Umlaute, ist noch nicht im converter implementiert.
const message = "hier kommt die Nachricht hin"

const message_in_trytes = Converter.asciiToTrytes(message)

const transfers = [
  {
    value: 0,
    address: address, // An diese Adresse wird die Transaktion gesendet.
    message: message_in_trytes // Die gesendete Nachricht (in Trytes)
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, 3, 9))
  .then(bundle => {
    console.log('Transfer erfolgreich gesendet!')
    bundle.map(tx => console.log(tx))
  })
  .catch(err => {
    console.log(err)
  })
