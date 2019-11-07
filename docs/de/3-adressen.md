# EinfachIOTA Entwickler Workshop 
## 3 Adressen

Im letzten Teil des Entwickler Workshops haben wir vieles über IOTA Transaktionen gelernt, zum Beispiel aus welchen verschiedenen Teilen sie bestehen und wie man sie in den Tangle schickt. 

In diesem Teil werden wir IOTA Adressen genauer ansehen, sowie das vorhandene Guthaben an IOTA Tokens auslesen. 

Was sind überhaupt Adressen bei IOTA? 
Um IOTA Tokens zu versenden, braucht man zwangsläufig eine Empfängeradresse, um auch das richtige Ziel zu erreichen. Adressen kann jeder generieren lassen und diese auch ohne Bedenken öffentlich verteilen. 
Adressen generieren 

Möglichkeit 1: Trinity 
Trinity verfügt über eine Benutzeroberfläche, über die Sie auf Knopfdruck Transaktionen empfangen und neue Adressen generieren können.

Möglichkeit 2: IOTA Client Bibliotheken
Schauen wir uns an, wie wir Mithilfe der IOTA.js Bibliothek Adressen generieren können. Auf die gleiche Weise generiert uns auch das Trinity Wallet die Adressen im Hintergrund. 

### Schritt 1: 
Schaut euch im IOTA Workshop die Datei ‘3.1-create-address.js’ an. Hier sehen wir, das wir nicht viel für das Generieren einer Adresse brauchen. Dafür reicht lediglich einen Seed, die Methode ‘getNewAddress’ der IOTA Bibliothek sowie ein Objekt mit Optionen. Damit bekommen wir eine gültige Adresse zurück, die wir benutzen können. Auf die Optionen gehen wir später noch genauer ein.

### Schritt 2: 
Ändert den Seed (ihr könnt einen neuen Seed eintragen oder einfach ein paar Buchstaben ändern) und führt das Programm aus.

```bash
node code/3.1-create-address.js
```

Nach einem kurzem Moment solltet ihr eine IOTA Adresse angezeigt bekommen.


Devnet Tokens
Das IOTA Devnet ist ein unabhängiges Netzwerk und besitzt eigene, wertlose IOTA Devnet Tokens. 
Ihr bekommt solche Devnet Tokens über das IOTA Devnet Faucet oder ihr fragt bei uns im einfachIOTA #devtalk Channel, falls dies nicht funktionieren sollte.

Geht auf https://faucet.devnet.iota.org/ und kopiert eure Adresse in das Feld. Nach Absenden der Anfrage dauert es einen Moment, aber du bekommst direkt einen Link zum Tangle Explorer und kannst den Status der Transaktion ansehen. Es kann einige Minuten dauern bis die Transaktion abgesendet wurde. Schau zu und aktualisiere den Browser, bis die Transaktion auftauchen und bestätigt (confirmed) wurde. 

Guthaben einer Adresse überprüfen
Natürlich könnt ihr auch hier den Tangle Explorer benutzen. Wir überprüfen nun aber die Adresse mithilfe der Javascript Bibliothek. 

Wir öffnen dazu die Datei ‘3.2-check-balance’ und ändern dort der Wert der Variablen “addresse” zu unseren Adresse.

Führen wir das Programm aus, gibt uns die Methode “getBalances” die aktuelle Anzahl von IOTA Tokens auf der Adresse zurück.

```bash
node code/3.2-check-balance.js
```

Tada! Ihr solltet nun 1000 als Output bekommen. 

Adressen im Detail
Adressen werden mithilfe eines privaten Schlüssel erstellt. Ein privater Schlüssel wird durch den Seed erzeugt. Details könnt hier im einfachIOTA Wiki nachlesen. 

Private Schlüssel
Der private Schlüssel wird im Hintergrund aus dem Seed, einem Index (0 bis x) und einer Sicherheitsstufe (1 bis 3) erzeugt. Wird der Index erhöht, wird ein neuer privater Schlüssel erstellt. Je höher die Sicherheitsstufe, desto länger und sicherer ist der private Schlüssel.
Somit können aus einem Seed ganz einfach mehrere private Schlüssel erstellt werden. 


Adressen
Mit einem privaten Schlüssel wird eine Adresse erstellt. Daher führen derselbe Seed, der gleiche Index und dieselbe Sicherheitsstufe immer auch zum gleichen privaten Schlüssel und derselben Adresse.

“Address reuse” Problem
Von einer Adresse darf nicht mehr als einmal ausgezahlt werden. Wenn man von einer Adresse Tokens versendet, muss man danach entweder eine neue generieren indem man den Index erhöht, oder eine andere Sicherheitsstufe verwenden.
Das Problem ist als “adress reuse” bekannt. Angreifer können mit einer mehrfach benutzen Adresse den privaten Schlüssel knacken und somit den Zugriff auf darauf Befindente Tokens erhalten. 
Dieses Problem tritt nur beim mehrfachen Versenden von Tokens aus einer Adresse auf. Einkommende Transaktionen auf eine Adresse betreffen das Problem nicht. Achtet auch darauf, das ihr im Devnet stehts einen anderen Seed benutzt, als im Livenet!  

Optionen
Mit der IOTA Javascript Bibliothek kann mithilfe eines Objektes verschiedene Optionen zu der Funktion ‘getNewAddress’ mitgeben. Die Hauptoptionen sind “index” und “security”, also die Sicherheitsstufe. Zusätzlich werden noch andere Nebenoptionen wie zum Beispiel “total” unterstützt, womit man gleich mehrere Adressen generieren lassen kann. Diese und die anderen Nebenoptionen sind aber “deprecated” und werden nicht mehr lange unterstützt. 

Ihr wisst nun einiges über Adressen und könnt euch nun auch einfach eure eigene Spendenadressen generieren lassen. Doch Vorsicht, wenn ihr eure Spendenadresse leert, müsst ihr sie mit einer neuen Adresse austauschen! 

In diesem Workshop habt ihr gelernt:
- Was IOTA Adressen sind,
- wie sie generiert werden,
- wo man IOTA Devnet Tokens bekommen kann und
- wie man das Guthaben einer Adresse auslesen kann.

Im nächsten Workshop schauen wir uns das Senden von IOTA Tokens im Detail an. 
Vielen Dank fürs Lesen! 

