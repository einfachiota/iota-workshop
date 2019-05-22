///////////////////////////////
// Environment Check
///////////////////////////////

// Hiermit importieren wir die IOTA Javascript Blibliothek.
const iotaLibrary = require('@iota/core')

// Wir eerstellen unser IOTA Objekt und verbinden uns mit einem Provider - 
// in diesem Fall sind es mehrere IOTA Devnet Nodes hinter einem Loadbalancer
// https://docs.iota.org/docs/getting-started/0.1/references/iota-networks?q=devnet&highlights=devnet#devnet
const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Diese Funktion ruft Information zur IOTA Node (iri) und zeigt diese in der Konsole.
iota
  .getNodeInfo()
  .then(response => console.log(response))
  .catch(err => {
    console.error(err)
  })
