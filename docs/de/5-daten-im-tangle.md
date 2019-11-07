# EinfachIOTA Entwickler Workshop 
## 5 Datem im Tangle

Im letzten Teil des Entwickler Workshops haben wir IOTA Devnet Tokens versendet.

In diesem Teil werden wir uns anschauen, wie man Daten in den Tangle sendet und Daten aus dem Tangle auslesen kann. Viel Spaß!

### Schritt 1 - Setup

Öffne die Datei [5.1-send-data.js](5.1-send-data.js) in deinem Code Editor und schau dir den Code genau an und ändere folgende Dinge: 

- Seed (Zeile 12): Füge einen neuen Seed hinzu. Da wir hier nur Daten in den Tangle schicken, also eine "Null Wert Transaktion" ("Zero-Value-Transaction"), brauchen wir den Seed nicht zu notieren und können einen Developer Seed auf  [einfachIOTA.de](https://www.einfachiota.de/#/devtools) benutzen.
WICHITG: NIEMALS Seeds aus dem Internet benutzen - nur zum Entwickeln!

- Empfänger Adresse (Zeile 16): Hier kannst du eine beliebige IOTA Adresse eingeben. An diese Adresse wird die Nachricht später gesendet. 

- Nachricht (Zeile 23): Schreibe deine Nachricht, die in den Tangle geschickt werden soll, zwischen die zwei Anführungszeichen.

### Schritt 2 - Rein In den Tangle

Führe das Programm aus! 

```bash
node code/5.1-send-data.js
```

Nach einer kurzen Zeit bekommst du die Transaktion in der Konsole angezeigt.

Suche auf [TheTangle.org](https://devnet.thetangle.org) nach dem Hash.

So sah meine Transaktion aus: [klicke hier](https://devnet.thetangle.org/transaction/TNMLUPXUYNEQJHKOUHZ9OIYYDZJDMAKN9OEJOPYKNFMLAUERQEHGHKQRWDPVCLJCJZPLQOOBDP9ZIG999)

Das wichtigste ist hier der Converter. 

```bash
const Converter = require('@iota/converter')
```

Mit diesem kannst du deine Nachricht (nemmt man in der Programmierwelt auch String) in Trytes convertieren. 

Wenn du Objekte in den Tangle schicken willst, geht das natürlich auch. Du musst sie nur vor dem Konvertieren in einen String umwandeln.

```bash
let objekt = {
  name: "Mein erstes Object im Tangle",
  webseite: "https://www.einfachiota.de"
}

const message_in_trytes = Converter.asciiToTrytes(JSON.stringify(objekt))

```
[Hier](https://devnet.thetangle.org/transaction/ZBJRPNOHTNTBBCMCCRHRJBDMEODBFUCJUSMLFBUIDOMEIUFOSHLTGUXNUXOXCKJYLQIYTV9TLTCQBO999) kannst du eine Beispiel Transaktion mit einem Objekt sehen.


### Schritt 3 - Raus aus dem Tangle

Nun haben wir Daten in den Tangle gespeichert, doch... wie lesen wir sie aus?

Es ist ganz einfach! Schau dir dazu den Code [5.2-fetch-data.js](5.2-fetch-data.js) an. 


Ändere die Adresse (Zeile 12) - Kopiere die Adresse, zu der du die Daten geschickt hast.

Führe das Programm aus:

```bash
node code/5.2-fetch-data.js
```

Nach einer kurzen Zeit sieht du die Nachricht in der Konsole. Einmal als Tryte und einmal schön leserlich in Ascii.

Hier erkennst du nun auch schön, das ganz viele "neunen" angehängt werden. Das hängt damit zusammen, das die Daten im "signatureMessageFragment" der IOTA Transaktion gespeichert werden und dafür 2187 Trytes freigehalten werden. Die fehlenden Stellen werden einfach mit "neunen" aufgefüllt.

Also eine Transaktion kann genau 2187 Trytes an Daten speichern. Will man größere Datenmengen versenden, muss man diese auf mehrere Transaktionen aufteilen.


In diesem Workshop habt ihr gelernt:
- Wie manDaten in den Tangle schickt.
- Wie man Daten von einer Adresse ausließt. 

Im nächsten Workshop schauen wir uns die "zero message queue" (ZMQ) des IRI's genauer an. 

Danke fürs Lesen! 