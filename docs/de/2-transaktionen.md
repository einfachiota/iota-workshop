# EinfachIOTA Entwickler Workshop 
## 2 Transaktionen

Im letzten Teil des Entwickler Workshops (https://www.einfachiota.de/einfachiota-entwickler-workshop-0-hello-world/) haben wir unsere Entwicklungsumgebung erfolgreich aufgesetzt und einige Informationen zu einem IOTA Node (IRI) abgerufen. 

In diesem Teil werden wir unsere erste IOTA Transaktion versenden und nach Transaktionen einer bestimmten IOTA Adresse suchen. 

Wir brauchen dazu einen Seed, eine Empfängeradresse und ein Transferobjekt. Mit diesen Dingen können wir Mithilfe der IOTA Javascript Bibliothek eine Transaktion in den Tangle schicken. In diesem Beispiel versenden wir eine “Zero Value” Transaktion, also eine Transaktion ohne IOTA Token. 

Fangen wir nun mit einigen Begriffserklärungen an.

Seed
Ein Seed ist ein eindeutiges Kennwort, mit dem man auf alle zugehörigen IOTA Adressen zugreifen kann. Seeds bestehen aus genau 81 Trytes, also nur aus der Zahl 9 und den Großbuchstaben von A-Z.

Mehr Informationen über den Seed könnt ihr in unserem neuen Wiki nachlesen! 
https://wiki.einfachiota.de/einfuehrung/anleitungen/erstelle-einen-seed

Wichtig: Nutzt keine Online Tools zur Erstellung eures Seeds, sondern erzeugt ihn auf eurem Computer oder auf einem Blatt Papier! 

Linux
```bash
cat /dev/urandom |tr -dc A-Z9|head -c${1:-81}
```
Mac
```bash
cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
```
Windows
Hier ist es etwas komplizierter. Folge bitte der Anleitung im einfachIOTA Wiki. https://wiki.einfachiota.de/einfuehrung/anleitungen/erstelle-einen-seed?s[]=%2Aseed%2A#erstellen-sie-einen-seed-unter-einem-windows-betriebssystem


Adressen
Adressen sind öffentlich und werden aus einem privaten Schlüssel generiert werden.

Jeder private Schlüssel wird aus einem Seed mit einem Index und einem Sicherheitslevel generiert.
Wir benutzen die Adresse des IOTA Entwickler Workshops und schicken dorthin eine Transaktion mit einer netten “Hello World” Nachricht.

Die Adresse ist HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D

Bereits eingegangene Transaktionen könnt ihr mit dem Tangle Explorer beobachten: 
https://devnet.thetangle.org/address/HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D

Achtet darauf, dass der Tangle Explorer auf “Devnet” geschaltet ist. 
Ihr könnt das Netzwerk ganz unten auf der Seite wechseln.

Transaktionen
Eine Transaktion ist eine Anweisung, um Daten oder IOTA-Token an eine Adresse zu senden oder IOTA-Token von einer Adresse zu belasten.
https://wiki.einfachiota.de/einfuehrung/was-ist-eine-transaktion

Ein Transferobjekt beinhaltet folgende Elemente:
value: Die Anzahl der zu versendenden IOTA Token, kann auch 0 sein (=”Zero Value” Transaktion).
address: Die Empfängeradresse.
message: Eine optionale Nachricht. 

Genug Erklärungen, auf zum Code!

### Schritt 1:
Öffne die Datei “2.1-send-hello.js” in deinem Code Editor und schau dir den Code an!

### Schritt 2:
Ändere das Attribute “message” im Transferobjekt von “HELLOWORLD” zu “HALLOWELT”.

### Schritt 3: 
Führt nun das Programm aus und schaut zu was passiert!

```bash
node code/2.1-send-hello.js
```

Das Programm gibt euch eine lange Nachricht zurück, diese sollte in Etwa so aussehen:


Die Nachricht besteht aus einem Array welches deine IOTA Transaktion enthält. 
Du kannst nun den Transaktionshash (hash) kopieren. Diesen kopierst du in die Suche auf TheTangle.org (https://devnet.thetangle.org/) damit du dir die Transaktion nochmal übersichtlich angucken kannst.
Achte darauf, das TheTangle.org im Devnet nach deiner Transaktion suchst.

Hier kannst du dir meine Transaktion als Beispiel ansehen: 
https://devnet.thetangle.org/transaction/LDGQDNDYJLCGWNGNHRORWEKOXNVZXTEXTNJMCUSZBGRUCCCQC9TREGCVVEHHMHJYHAYXONCMGLMK99999

Einen Transaktionshash kann man gut an den 9’en am Ende erkennen, die nach dem PoW vorhanden sind. Dadurch kann man ihn leicht von einer Adresse oder einem Bundlehash leicht unterscheiden.

Schau dir nun die Adresse des IOTA Workshops genauer an, hier kannst du sehen, wie viele Transaktionen schon eingegangen sind. 

https://devnet.thetangle.org/address/HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D

Wie du siehst, ist hier sehr viel los! ;)

### Schritt 4:
Ändere jetzt die Message von “HALLOWELT” zu “TRITS&TRYTES” und führe das Programm erneut aus. 

Hoppla, da ist etwas schief gelaufen.

NodeJS teilt uns den aktuellen Fehler mit: “Error: Invalid transfer object: [object Object]”.

Also, irgendwas stimmt mit unserem Transferobjekt (transfer object) nicht.

Wie ihr bestimmt schon vermutet habt, hat es was mit den Trits und Trytes zu tun. 

Eine kurze einfache Erklärung zu Trits und Trytes: 
Ein Trit kann die Werte 0, 1 oder -1 annehmen. 
Ein Tryte besteht aus drei Trits.
Das Tryte Alphabet (https://wiki.einfachiota.de/grundlagen/verweise/tryte-alphabet), besteht aus 27 Zeichen (A bis Z und das Zeichen “9”)

Mehr darüber könnt ihr hier nachlesen: 
https://wiki.einfachiota.de/grundlagen/konzepte/trinary?s[]=%2Atrits%2A

Unser Problem befindet sich also in unserer neuen Nachricht, da das Zeichen “&” nicht im Trytes Alphabet vorhanden ist und die Nachricht des Transferobjektes nur Zeichen aus dem Tryte Alphabet akzeptiert. 

Ersetzen wir nun das “&”-Zeichen durch die Zeichenkette “UND”, danach funktioniert wieder alles wieder gewohnt. Doch wie versenden wir ganz normale Nachrichten?

### Schritt 5. Konvertierung von Ascii to Trytes

Moment, was ist den nun Ascii? https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange
Ascii dient zur Codierung von Zeichen im englischen Alphabet. Damit können alle Zeichen deiner Computertastatur in 7-Bit abgebildet werden.

Wenn wir also ganz normalen Text auf unserem Computer schreiben, kann dieser in ASCII codiert werden. 

Damit wir ganz normalen Text in den Tangle schicken können, müssen wir auf eine der zwei Möglichkeiten zurückgreifen. 

Möglichkeit 1: Der Onlinekonvertierer
Ihr könnt zum Beispiel auf “https://laurencetennant.com/iota-tools/” gehen und eure Nachricht in Trytes übersetzen lassen. (Ganz unten bei “ASCII Message to Trytes”) 
Tippt einfach eure Nachricht ein und ihr bekommt direkt die Trytes angezeigt.

Möglichkeit 2: Mit der IOTA Javascript Bibliothek
Die iota.js Bibliothek bringt einen tollen Konverter gleich mit! 
Hier wurden zwei nützliche Methoden implementiert, die wir ganz einfach benutzen können.

asciiToTrytes
https://github.com/iotaledger/iota.js/blob/next/api_reference.md#converterasciitotrytesinput

trytesToAscii
https://github.com/iotaledger/iota.js/blob/next/api_reference.md#convertertrytestoasciitrytes

Wir können unser Programm nun mit der ersten Methode erweitern, um Text Nachrichten einfach im Tangle zu speichern!

Importiere den Konverter
const converter = require('@iota/converter')

Speichere deine Nachricht in einer Variablen.
var nachricht = "Hallo Welt! Ich bin eine einfache Nachricht im Tangle!"

Konvertiere deine Nachricht in Trytes und speichere den Wert in einer anderen Variablen. 
var nachricht_in_trytes = converter.asciiToTrytes(nachricht)

Gib im Transferobjekt dem “message Attribut deine Variable als Wert mit. 
```bash
const transfers = [
  {
    value: 0,
    address: address,
    message: nachricht_in_trytes
  }
]
```

Und ab in das Tangle damit!


Hier ist meine Transaktion auf TheTangle.org. Du kannst bei “Message” nun zwischen Trytes und Text umschalten.
https://devnet.thetangle.org/transaction/HUIOBYXPCRFXFQAEFZWQTJCFWMFVADTUOTUPCGQINAFGINIXATLWVGFCBKMOIGURAVHKYVXPXMPP99999


Schritt 6: Transaktionen aus dem Tangle laden. 
Öffne dafür bitte die Datei “2.2-fetch-hello.js” in deinem Editor und schaue dir an, was dort passiert.

Das Beispiel benutzt die Methode “findTransactionObjects”(https://github.com/iotaledger/iota.js/blob/next/api_reference.md#corefindtransactionobjectsquery-callback) mit der IOTA Workshop Adresse als Suchparameter. 
Mit dieser Funktion kann man auch nach Bundle Hashes oder Tags suchen!

Führe das Programm aus und schaue dir das Ergebnis an! Kannst du deine Transaktionen finden? ;) 

Das wars leider schon mit dem zweiten EinfachIOTA Workshop. 

Du hast nun gelernt,
Wie man Transaktionen in den Tangle schickt. 
Aus welchen Teilen eine Transaktion besteht. 
Was genau Trits und Trytes sind
Wie man normalen Text in Trytes konvertieren lassen kann
Wie man Transaktionen im Tangle findet
und wie man TheTangle.org benutzt. 

Im nächsten Workshop sehen wir uns die IOTA Adressen genauer an! 


Übungen:
Konvertiere diese Tryte Nachricht in ASCII:
RBPC9D9DCDEAFCTC9DHDEAJDCDADEAOBSBBDUCPCRCWCSBYBCCKBEAFCCDFDZCGDWCCDDDFA
