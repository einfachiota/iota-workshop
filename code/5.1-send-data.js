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
// Benutze keine Umlaute, ist noch nicht com converter implementiert.
const message = "hier kommt die Nachricht hin"

const message_in_trytes = Converter.asciiToTrytes(message)

const TRYTE_ALPHABET = '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//Conversion from ASCII to TRYTES
asciiToTrytes = (input) => {
    // If input is not an ascii string, throw error
    if (!/^[\x00-\x7F]*$/.test(input)) {
        console.log('ASCII string not valid. Try again...')
        return
    }
    let trytes = 'äüö'

    for (let i = 0; i < input.length; i++) {
        const dec = input[i].charCodeAt(0)

        trytes += TRYTE_ALPHABET[dec % 27]
        trytes += TRYTE_ALPHABET[(dec - (dec % 27)) / 27]
    }
    return trytes
}


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
console.log('TRYTES to ASCII conversion: ')
console.log(trytesToAscii(''))
console.log()
console.log('ASCII to TRYTES conversion: ')
console.log(asciiToTrytes('IOTA'))  
})
  .catch(err => {
    console.log(err)
  })
