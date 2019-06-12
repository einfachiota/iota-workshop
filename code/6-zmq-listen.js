///////////////////////////////
// Listen to live transactions
///////////////////////////////

let zmq = require('zeromq')
let sock = zmq.socket('sub')

// Verbinde zu dem ZMQ Port eines devnet node 
sock.connect('tcp://zmq.devnet.iota.org:5556')

// Überpüfe, ob ein Argument mitgegeben wurde
if (!process.argv[2]) {
  // Hier wird die Information in die Konsole geschrieben, 
  // das der User eine Adresse als Argument mitgeben kann
  // um nur diese Adresse zu beobachten.
  console.log('Beobachte alle Transationen (TX) des Nodes')
  console.log('---------------------')
  console.log('Info: Wenn du nur eine einzelne Adresse betrachten willst, gib folgenden Befehl ein:')
  console.log('node 6-zmq-listen.js AHSAK..99WS')

  // Subscribe zu allen einkommenden Transaktionen
  sock.subscribe('tx')
} else {
  console.log('Bobachte transaktionen zu der Adresse: ' + process.argv[2])
  console.log(
    'Sende etwas zu dieser Adresse. Beachte, das es bis zu 30 Sekunden dauern kann, bis die Transaktion hier erscheint.'
  )
  // Subscribe zu der Adresse, die als Argument mitgegeben wurde.
  sock.subscribe(process.argv[2])
}

sock.on('message', msg => {
  const data = msg.toString().split(' ') // mit "split" bekommen wir das "Topic", also das Thema und die Daten
  switch (
    data[0] // Der Index 0 gibt uns das Thema (Topic)
  ) {
    case 'tx': // Is das Thema "tx", werden alle Transaktionen in die Konsole geschrieben.
      console.log(`Ich bin eine TX: `, data)
      break
    case process.argv[2]: // Wurde eine Adresse mitgegeben, scheiben wir nur die relevaten Transaktionen in die Konsole.
      console.log(`Ich bin die TX, nach der du gesucht hast: `, data)
      break
  }
})
