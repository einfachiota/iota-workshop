
# einfachIOTA Entwickler Workshop 
## 4 Send tokens

Im letzten Teil des Entwickler Workshops haben wir eniges über die IOTA Adressen gelernt und geprüft, ob und wieviel IOTA Tokens auf einer Adresse sind.
In diesem Teil werden wir nun endlich IOTA Tokens versenden. Wir benutzen hierfür wieder das IOTA Devnet und die Devnet Tokens, die kostenlos verfügbar sind.

### Schritt 1
Stellt sicher, das ihr IOTA Devnet Tokens auf euer Adresse habt - führt dazu nochmal das Programm 3.2-check-balance.js aus.

Ersetze nun in in der Datei 4-send-tokens.js in der Zeile 13 den Seed mit dem Seed, den du in 3.1-create-address.js benuttz hast um die Adresse zu erstellen, auf der die IOTA Devnet Tokens liegen. 

In diesem Beispiel werden wir die Tokens von der einen Adresse auf eine neue Adresse senden - beide Adressen werden mit dem selben Seed generiert. Also schickt ihr euch selbst die Tokens. Natürlich könnt ihr auch eure Freunde nach einer IOTA Devnet adresse fragen und dort die Devnet IOTA Tokens hinschicken. Oder ihr macht euch dafür ein neuen Seed und geniert euch eine neue Adresse - es liegt ganz bei dir! ;) 


### Schritt 2: 
Neue adresse generieren

Die Funktion ‘getNewAddress’ kennen wir schon aus 3.1-create-address.js. Sie gib uns eine Liste (ein Array) mit einer unbenutzen Adresse zurück. Doch Moment mal, hier benutzen wir die Funktion ganz anders. 

Async und Await in Javascript -Was ist das, und warum brauchen wir das?

Das Schlüsseltwort “await” macht nix anders als zu Warten, bis die Funktion fertig ausgeführt wurde. Da wir mit der “getNewAddress” funkton auf einen IOTA Node benutzen, dauert das einige kurze Moment bis wir eine Antwort erhalten. Await gibt uns hier die möglichkeit, die die Liste der neuen Adressen (in unserem Fall nur eine) wird in der Variablen “receivingAddress” gespeichert und damit können wir nun in den nächsten Zeilen arbeiten. Also “await” ist nichts anderes als dieser Abschnitt und wurde mit “Doch Moment Mal” eingeleitet. Wir machen erst weiter, wenn ihr alles verstanden habt ;) 
Bei Fragen, kommt doch einfach ins Discord und Fragt! 

Doch das war noch nicht alles. Damit das mit dem “await” auch funktioniert, muss die Funkion mitspielen - also asnycron sein. In der Zeiöe 16 erstellen wir eine Asyncrone Funktion namens “main”, die in Zeile 51 Aufgerufen wird. 

Der Vorteil von async und await ist, das wir keine geschachtelten Funktionsketten habe. Wir können natürlich auch dieses Beipiel so wie in 3.1-create-address.js aufbauen und alles weiter im “.then()” teil ausfühten. Würde auch funkionieren, ist aber kein sauberer Programmistil. 

### Schritt 3 - Transaktionobjekt erstellen und in den Tangle schicken. 

Das Transaktionsobject wird ganz normal wie in dem 2.1-send-hello.js Beispiel augebaut - nur dieses mal eben mit einem Wert (=value). 
Gebt bei der Adresse nun eure Adresse (die erste Adresse in dem Array = receivingAddress[0]) oder eine andere Adresse ein. 

Danach erstellen wir unser Bundle in Trytes mit Hilfe der “prepareTransfers” Funkion und senden diese in den Tangle mit “sendTrytes”. 

Wir benutzen hier einen “try - catch” Block, um auf eventuelle Fehler zu reagieren und eine Fehlermedung auszugeben. Mit einem solchen “try - catch” Block können wir dies tun, ohne das unser Programm bei einem Fehler abstürtzt. Ein möglicher Fehler wäre zum Beispiel, wenn keine Verbinung zum IRI aufgebaut werden kann.

Im normalfall sollte aber alles in Ordnung sein und du bekommst ein Transaktion nach kurzer Zeit in der Konsole angezeigt. 

In diesem Workshop habt ihr gelernt:
Wie man IOTA Tokens mit der Javascript Bibliothek versendet.
Was "async" und "await" bei Funktionen bedeeutet.
Wie man Fehler mit dem "try-catch" Block abfängt.

Im nächsten Workshop schauen wir uns das Senden von Daten in den Tangle im Detail an. 

Vielen Dank fürs Lesen! 





 






