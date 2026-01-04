import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-4xl mx-auto px-4 py-24">
        <h1 className="font-display text-4xl md:text-5xl italic mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p className="text-foreground">
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot"). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
          </p>

          <section>
            <h2 className="text-2xl font-bold">Verantwortlicher</h2>
            <p className="text-foreground">
              ScalingX Hypergrowth GmbH<br />
              Michel Lason<br />
              Markgrafendamm 4<br />
              10245 Berlin<br /><br />
              Telefon: 0172 / 735 58 91<br />
              E-Mail: <a href="mailto:info@scalingx.io" className="text-accent hover:underline">info@scalingx.io</a><br />
              Verantwortlicher: Michel Lason
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Arten der verarbeiteten Daten</h2>
            <ul className="list-disc list-inside text-foreground space-y-1">
              <li>Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen)</li>
              <li>Kontaktdaten (z.B., E-Mail, Telefonnummern)</li>
              <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos)</li>
              <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
              <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Kategorien betroffener Personen</h2>
            <p className="text-foreground">
              Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Zweck der Verarbeitung</h2>
            <ul className="list-disc list-inside text-foreground space-y-1">
              <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
              <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Reichweitenmessung/Marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Verwendete Begrifflichkeiten</h2>
            <p className="text-foreground">
              „Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann.
            </p>
            <p className="text-foreground mt-4">
              „Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
            </p>
            <p className="text-foreground mt-4">
              Als „Verantwortlicher" wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Maßgebliche Rechtsgrundlagen</h2>
            <p className="text-foreground">
              Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-1 mt-4">
              <li>Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO</li>
              <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO</li>
              <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO</li>
              <li>Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Sicherheitsmaßnahmen</h2>
            <p className="text-foreground">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Rechte der betroffenen Personen</h2>
            <ul className="list-disc list-inside text-foreground space-y-2">
              <li>Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li>
              <li>Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
              <li>Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.</li>
              <li>Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe der gesetzlichen Vorgaben zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.</li>
              <li>Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Widerrufsrecht</h2>
            <p className="text-foreground">
              Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Widerspruchsrecht</h2>
            <p className="text-foreground">
              Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe der gesetzlichen Vorgaben jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Cookies und Widerspruchsrecht bei Direktwerbung</h2>
            <p className="text-foreground">
              Als „Cookies" werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern.
            </p>
            <p className="text-foreground mt-4">
              Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden.
            </p>
            <p className="text-foreground mt-4">
              Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste über die EU-Seite <a href="http://www.youronlinechoices.com/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com/</a> erklärt werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Löschung von Daten</h2>
            <p className="text-foreground">
              Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Kontaktaufnahme</h2>
            <p className="text-foreground">
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. DSGVO verarbeitet. Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Hosting und E-Mail-Versand</h2>
            <p className="text-foreground">
              Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses Onlineangebotes einsetzen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Erhebung von Zugriffsdaten und Logfiles</h2>
            <p className="text-foreground">
              Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL, IP-Adresse und der anfragende Provider.
            </p>
            <p className="text-foreground mt-4">
              Logfile-Informationen werden aus Sicherheitsgründen für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Änderungen und Aktualisierungen der Datenschutzerklärung</h2>
            <p className="text-foreground">
              Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
