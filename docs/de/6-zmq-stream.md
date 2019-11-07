# EinfachIOTA Entwickler Workshop 
## 5 ZMQ Stream

Im letzten Teil des Entwickler Workshops haben wir Daten in den Tangle geschicht und Daten aus dem Tangle gelesen.

In diesem Teil werden wir uns ansehen, welche Transaktionen zu einen IOTA Node geschickt werden. Mithilfe von ZMQ können wir in Echtzeit alle einkommende Transaktionen sehen, oder nur Transaktionen zu einer bestimmt Adresse beobachten.

### Schritt 1 - ZMQ Basics

> ZeroMQ (auch ØMQ, 0MQ oder ZMQ) ist eine High-throughput computing asynchrone Nachrichtenaustausch Bibliothek, die spezielle auf Verteilte Systeme oder gleichzeitige Ausführung in verschiedenen Systemen entwickelt wurde. 

Zitat von [Wikipedia](https://de.wikipedia.org/wiki/ZeroMQ)

Also, einfach gesagt:

Ein IOTA Node (die IOTA Referenz Implementation, kurz iri) veröffentlicht alle einkommenden Transaktionen mit Hilfe von ZMQ.

Clients (z.b Apps) können diese Nachrichten empfangen, und je nachdem reagieren. Somit können Apps Echtzeitdaten in einem IOTA-Netzwerk nutzen.

Ein Beispiel könnt ihr auf der [TheTangle.org](https://thetangle.org/) Startseite sehen, hier werden alle Transaktionen in Echtzeit angezeigt. 


Das schöne an ZMQ ist, es ist 
- open source
- community driven
- Die Blibliothek is in sehr vielen Programmiersprachen verfügbar 

### Schritt 2 - ZMQ zuhören

 Nun wissen wir so grob, was ZMQ ist - nun schauen wir uns das natürlich genauer an!

Führt einfach mal das Programm aus und wartet kurz, bis ihr etwas in der Konsole seht.
```bash
node code/6-zmq-listen.js
```

Nach kurzer Zeit sollten Transaktionen angezeigt werden. Das sind echte Transaktionen, die gerade jemand ins Devnet geschickt hat. 
Wir bekommen nun also alle Transaktionen angezeigt, die in diesen IOTA Devnet Node eingehen.

Nun ist es auch Möglich, nur Transaktionen zu einem Bestimmten "Thema" zu beobachten. Ein Thema kann zum Beispiel eine bestimmt Adresse sein.

Generiere dir eine neue Adresse, und füge sie dem Programmaufruf hinzu.

```bash
node code/6-zmq-listen.js AHSAK..99WS 
```

Nun, im moment sehen wir nicht viel, da nichts auf diese Adresse geschickt wird. 

Damit wir nun auch was angezeigt bekommen, senden wir eine nette "Hallo Welt" Nachricht an die Adresse.

Ändere nun die Adresse der [2.1-send-hello](2.1-send-hello.js) Datei und führe das Programm in einem neuen Terminal Fenster aus. 

```bash
node code/2.1-send-hello.js
```

Beachte, das es bis zu 30 Sekunden dauern kann, bis die Transaktion hier erscheint.

Wenn ihr das ganze mal auf eurem IOTA Node ausprobieren möchstet, denkt daran ZMQ zu aktivieren!

> Clients können das ZMQ nur abonnieren, wenn für den IRI-Node, mit dem sie verbunden sind, der Konfigurationsparameter `ZMQ-ENABLED` auf `true` festgelegt ist.

Das wars auch schon mit diesem Teil des Workshops.

Ihr hab nun gelernt, was

- Zero message queue (ZMQ) ist.
- Wie man alle einkommenden Transaktionen eines IOTA Nodes beobachten kann.
- Wie man eingehende Transaktionen auf eine bestimmte Adresse beobachen kann.

Vielen Dank fürs Lesen!

Im nächsten Workshop, lernen wir alles über Masked Authenticated Messaging, kurz MAM. Bis bald!



