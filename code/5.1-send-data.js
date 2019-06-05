///////////////////////////////
// Send Data
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Esrstelle einen Seed und trage ihn hier ein.
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

// Generiere eine Adresse aus dem Seed und trage sie hier ein
const address =
  'LOREMOORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD'

const Converter = require('@iota/converter')

// Zwischen die Anführungszeichen kommt deine Nachricht. ( send data ? )
// Benutze keine Umlaute, ist noch nicht implementiert.
const message = "hier kommt die Nachricht hin"

const message_in_trytes = Converter.asciiToTrytes(message)

const transfers = [
  {
    value: 0,
    address: address, // Where the data is being sent
    message: message_in_trytes // The message converted into trytes
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, 3, 9))
  .then(bundle => {
    console.log('Transfer successfully sent')
    bundle.map(tx => console.log(tx))
  })
  .catch(err => {
    console.log(err)
  })
