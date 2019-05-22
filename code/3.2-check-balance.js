///////////////////////////////
// Saldo einer Adresse holen
///////////////////////////////

// Wir importieren die IOTA JS Blibliothek und erstellen ein IOTA Objekt mit einem Devnet Provider.
const iotaLibrary = require('@iota/core')
const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Wir rufen den Saldo dieser Addresse ab
const address =
  'NBZLOBCWG9BAQTODDKNF9LYYTBOUWSQSGCWFQVZZR9QXCOAIBRYDTZOEGBGMZKJYZOPPGRGFFWTXUKUKW'

// Mit Hilfe dieser funktion bekommen wir den aktuellen Saldo der Adresse. 
iota
  .getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  })
