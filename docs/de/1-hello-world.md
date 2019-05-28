# EinfachIOTA Entwickler Workshop 
## 1 Hello World

Du wolltest schon immer mal Transaktionen mit Daten in den Tangle schicken, etwas mit MAM machen oder den neuen ZMQ Stream der IRI ausprobieren? Dann bist du hier genau richtig! 

Der IOTA Workshop bietet einfache Beispiele, die einem Entwickler bei der Arbeit mit dem IOTA Tangle helfen.

Der Workshop wurde von Lewis Freiberg, dem Kopf des IOTA Ökosystems entwickelt und wir haben das ganze für euch in eine Schritt für Schritt Anleitung gepackt, in einfacher Sprache erklärt und als Tutorial Reihe aufgebaut.

Der Workshop hat einige Beispiele, die man ausführen und verändern kann. Wir werden das Repository klonen und damit lokal auf dem Rechner experimentieren. Hier schonmal vorab der Link zum Repo: 
https://github.com/einfachiota/iota-workshop.git


Viel Spaß beim Ausprobieren!

## 1 Hello World

Bevor wir richtig beginnen können müssen wir einige Programme auf dem Computer installieren. Dazu gehören: 
NodeJS
git
Ein Code Editor deiner Wahl

Du hast bereits die Programme installiert? Dann springe direkt zu Schritt 4. 

*Setup der Entwicklungsumgebung*
### Schritt 1: Installation von NodeJS
Node.js ist eine JavaScript-Laufzeitumgebung, mit der man Javascript Programme ausführen kann. 

Zur Installation musst du nur auf die NodeJS Webseite (https://nodejs.org/de/) gehen und die Installationsdatei downloaden, danach einfach  installieren. Hol dir am besten die “Long Term Support” (LTS) Version (aktuelle Versionsnummer 10.15.0).

Ob alles funktioniert hat, kannst du in der Kommandozeile ausprobieren. Prüfe einfach nach der Versions Nummer deiner Node installation indem du diesen Befehl in der Kommandozeile eingibst:

```bash
node -v 
```

Erscheint hier nun eine Versionsnummer, in meinem Fall, 10.15.0, habt ihr NodeJS korrekt installiert.

Für MacOS kannst du die bereits installierte Kommandozeile mit dem Namen “Terminal” benutzen - ich nutze “iTerm” dafür.

Auf Linux Rechnern heißt das ganze auch “Terminal” oder “xTerm”. 

Bei Windows heißt die Kommandozeile “Eingabeaufforderung”.

### Schritt 2: Installation von Git
Git [ɡɪt] ist eine freie Software zur verteilten Versionsverwaltung von Dateien, die durch Linus Torvalds initiiert wurde. Torvalds ist außerdem der Initiator sowie die treibende Kraft bei der Entwicklung des Linux-Kernels, der zentrale Bestandteil jedes Linux Systems. 

Das coole an git ist, dass man mit vielen Menschen gleichzeitig an Software arbeiten kann, ohne dass man sich gegenseitig auf die Füße tritt. Außerdem ist es dezentral, denn jeder Benutzer besitzt eine lokale Kopie des gesamten Repositorys (~ Verzeichnisses), inklusive der Versionsgeschichte (history).

Die für dich passende Installationsanleitung kannst du hier finden: https://git-scm.com/book/de/v1/Los-geht%E2%80%99s-Git-installieren
Die Standart Optionen bei der Installation sind völlig ausreichend.

### Schritt 3: Wähle und installiere einen Code Editor
Such dir einen Code Editor aus, der zu dir passt. Ich kann dir den Editor Atom (https://atom.io/) oder Visial Studio Code (https://code.visualstudio.com/) empfehlen. Beide sind kostenlose Open-Soure Editoren die für alle gängigen Betriebssysteme bereitgestellt werden.

*Setup des Projektes*
### Schritt 4: Clone das git Repository 
Da Entwickler oft in der Konsole arbeiten, erkläre ich dir kurz, wie man damit umgeht. 

Ein paar nützliche Konsolenbefehle
Bei Windows immer ohne: $

Linux:
```bash
ls
```
Windows: 
```bash
dir
```
Der ls-Befehl ist einer der wichtigsten Konsolenbefehle unter Linux und hat sehr viele Optionen. Der ls-Befehl gibt eine Liste von Dateien aus (list).


```bash
cd
```
cd steht für change directory und dient zum Wechseln in ein (Unter-)Verzeichnis.
cd .. zum Wechseln in ein Oberverzeichnis


```bash
pwd
```
print working directory gibt das aktuelle Verzeichnis aus, in dem man sich befindet. 


```bash
mkdir
```
mkdir steht für make directory und dient zum Anlegen von einem oder mehreren Verzeichnissen. 

Wir erstellen uns nun in unserem “home” Verzeichnis einen “development” Ordner, in dem wir das Repository herunterladen. Natürlich kannst du es auch in einem anderen, passenderen Ordner herunterladen.

Gehe in dein Homeverzeichnis:
```bash
cd ~
```
Oft wird die Kurzform ~/Ordnername verwendet um in einen Ordner im Homeverzeichnis zu navigieren. Die Tilde ~ steht für eine Shell-Extension, also quasi eine Abkürzung, die immer auf /home/DEIN_BENUTZERNAME/ verweist.

Nun erstellen wir einen Ordner namens “development” und gehen hinein
```bash
mkdir development
cd development
```

Danach können wir das IOTA Workshop Repository klonen und somit herunterladen: 
```bash
git clone https://github.com/iota-community/iota-workshop.git
```

Als letztes gehen wir in den Projektordner und öffnen ihn mit dem Code Editor. 
```bash
cd iota-workshop
```

Nun müssen wir nur noch alle Abhängigkeiten installieren und danach können wir richtig loslegen! 

### Schritt 5: Installiere die Abhängigkeiten
```bash
npm install
```

Npm steht für Node Package Manager. Dieser installiert alle Pakete, die in der package.json Datei aufgeführt sind. So kann man Javascript Bibliotheken auslagern und die Versionierung konfigurieren. Benötigte Javascript Bibliotheken sind in diesem Projekt die IOTA Javascript Bibliothek. Einmal das Grundpaket (core) für alle IOTA Api-Befehle und einmal das Masked Authenticated Messaging Paket (mam), für die verschlüsselten Nachrichten. Für das Beispiel mit dem ZMQ Stream wird auch noch eine extra Bibliothek (zeromq) benötig. 

Wir haben es geschafft! Nun kommen wir zum spannenden Teil des Tutorials, die Beispiele: 

Ihr könnt das erste Beispiel mit diesem Befehl ausführen: 

```bash
node code/1-hello-world.js
```

Die Ausgabe zeigt euch die Informationen des verbundenen IOTA IRI-Nodes, in diesem Fall ist das “https://nodes.devnet.thetangle.org:443”. Das Beispiel benutzt dafür die Methode “getNodeInfo()” der IOTA Bibliothek. 

Der Workshop benutzt das IOTA Devnet (https://docs.iota.org/docs/getting-started/0.1/references/iota-networks?q=devnet&highlights=devnet), welches eine Kopie des Haupnetzes (Mainnet) ist. Im Devnet gibts es also auch IOTA Tokens, die aber keinen Wert haben und zum Testen benutzt werden können. 


## Übung 

Öffne die Datei “1-hello-world.js” in deinem Code Editor und hole dir die Node Informationen eines anderen IRI-Nodes. Ersetze also “https://nodes.devnet.thetangle.org:443” durch eine andere Adresse. Eine Liste verschiedener Nodes findest du hier: https://iota.dance/ 

Das wars auch schon mit dem ersten Teil des einfachIOTA Entwickler Workshop. Ich hoffe ihr habt etwas gelernt und hattet Spaß! 

In diesem Teil haben wir
unsere Entwicklungsumgebung eingerichtet.
das IOTA Workshop Repository geklont.
das “1-hello-world” Beispiel ausgeführt und bearbeitet.	

Im nächsten Teil werden wir unsere ersten Transaktionen versenden! 
Bis demnächst! 
