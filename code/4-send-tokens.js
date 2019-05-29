///////////////////////////////
// IOTA Tokens versenden
///////////////////////////////

// Wir importieren die IOTA JS Blibliothek und erstellen ein IOTA Objekt mit einem Devnet Provider.
const iotaLibrary = require('@iota/core')
const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Ersetze dies durch den Seed, der zu der Adresse mit IOTA Tokens gehört.
const seed =
  'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D'

// Erstelle  eine Wrapperfunktion, somit können  wir async und await verwenden.
const main = async () => {
  // Generiere eine andere neue Adresse aus dem Samen, hier bekommen wir eine Liste aus Addressen zurück. (Array)
  const receivingAddress = await iota.getNewAddress(seed, {
    index: 1,
    total: 1
  })

  // Erstelle eine Transfer Objekt mit unsere der neuen Adresse. Wir holen die erste Adresse aus der Liste
  // receivingAddress[0] gibt uns das erstes Element der Liste, also unsere neue Adresse.
  const transfers = [
    {
      value: 500,
      address: receivingAddress[0],
      tag: 'MYMAGIC'
    }
  ]
  console.log('Sende 500i zu ' + receivingAddress)

  try {
    // Hiermit erstellen wir unser Bundle Objekt im Trytes Format.
    const trytes = await iota.prepareTransfers(seed, transfers)

    // Hiermit senden wir die Trytes zu dem IOTA Node.
    const response = await iota.sendTrytes(trytes, 3, 9)

    
    // Unsere Transaktion wurde erfolgreich gesendet. In der Kosnsole wird das Transaktion Objekt angezeigt.
    console.log('Senden beendet!')
    response.map(tx => console.log(tx))
  } catch (e) {
    // Dieser Teil wird aufgerufen, falls oben etwas schief ging.
    console.log(e)
  }
}

main()
